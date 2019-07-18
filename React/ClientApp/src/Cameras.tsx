import './App.css';

export interface IItem1{
    cameras: any;
    viewFiltres: boolean;
}

export interface IProps { }

export class Cameras {
    public getCameras() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", '/getCameras', true);
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
}
