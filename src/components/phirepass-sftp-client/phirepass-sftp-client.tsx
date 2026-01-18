import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'phirepass-sftp-client',
    styleUrl: 'phirepass-sftp-client.css',
    shadow: true,
})
export class PhirepassSftpClient {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
