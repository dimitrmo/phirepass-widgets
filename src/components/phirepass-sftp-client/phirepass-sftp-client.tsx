import { Component, Host, Prop, State, h } from '@stencil/core';
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
    maximize: EventEmitter<boolean> | undefined;

    private toggle_max() {
        this.max = !this.max;
        this.maximize?.emit(this.max);
        console.log('doen', this.max);
    }

    render() {
        const klass = this.max ? "default" : "max";
        return (
            <Host class={klass}>
                <header>
                    <section class="title">
                        <img src={svg} alt="SFTP Client" />
                        <div class="text">
                            <div class="name">{this.name}</div>
                            <div class="description">{this.description}</div>
                        </div>
                    </section>
                    <section class="actions">
                        <div class="action" onClick={this.toggle_max}>
                            <img src={max} alt="Maximize" />
                        </div>
                    </section>
                </header>
                <main></main>
                <footer></footer>
            </Host>
        );
    }
}
