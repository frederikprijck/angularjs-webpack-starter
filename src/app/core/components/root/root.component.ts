export class Root implements angular.IComponentOptions {
    template: string;

    constructor() {
        this.template = `
        <div ui-view></div>
        `;
    }
}
