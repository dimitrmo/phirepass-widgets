import { Component, Host, Method, Prop, State, h } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

import svg from './phirepass-sftp-client.logo.svg';
import max from './phirepass-sftp-client.max.svg';

// https://sweet-sftp-view.lovable.app/

@Component({
    tag: 'phirepass-sftp-client',
    styleUrl: 'phirepass-sftp-client.css',
    shadow: true,
})
export class PhirepassSftpClient {

    @Prop()
    name = 'SFTP';

    @Prop()
    description = 'Client';

    @State()
    max = false;

    @Event({
        eventName: 'maximize',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    maximizeEvent: EventEmitter<boolean> | undefined;

    @Method()
    async maximize() {
        this.max = !this.max;
    }

    @Method()
    async minimize() {
        this.max = false;
    }

    @Method()
    async showLogin(username = true, password = true) {
        this.show_login_screen_username = username;
        this.show_login_screen_password = password;
        this.show_login_screen = true;
    }

    @State()
    show_login_screen = false;

    @State()
    show_login_screen_username = false;

    @State()
    show_login_screen_password = false;

    private toggle_max() {
        this.maximizeEvent?.emit(!this.max);
    }

    render() {
        return (
            <Host class={{
                'default': !this.max,
                'max': this.max,
            }}>
                <section class="listing">
                    <header>
                        <section class="title">
                            <img src={svg} alt="SFTP Client" />
                            <div class="text">
                                <div class="name">{this.name}</div>
                                <div class="description">{this.description}</div>
                            </div>
                        </section>
                        <section class="actions">
                            <div class="action" onClick={() => this.toggle_max()}>
                                <img src={max} alt="Maximize" />
                            </div>
                        </section>
                    </header>
                    <main></main>
                    <footer></footer>
                </section>
                <section class={{
                    'creds': true,
                    'blurred': this.show_login_screen,
                }}>
                    {this.show_login_screen && <form class="form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </form>}
                </section>
            </Host>
        );
    }
}
