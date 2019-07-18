import './App.css';

export interface IStateSettings {
    dataJson: any;
}

export interface IProps { }

export class Settings {
    typeSettings: string;

    constructor(typeSettings: string) {
        this.typeSettings = typeSettings;
    }

    public getSettings() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (this.typeSettings == "Camera") {
                xhr.open("get", '/getConfig?typeConfig=Camera', true);
            }
            else if (this.typeSettings == "Service") {
                xhr.open("get", '/getConfig?typeConfig=Service', true);
            }
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
}
