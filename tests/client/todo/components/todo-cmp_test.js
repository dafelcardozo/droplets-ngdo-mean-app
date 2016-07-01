/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var todo_service_1 = require('../../../../client/dev/todo/services/todo-service');
var MockTodoService = (function (_super) {
    __extends(MockTodoService, _super);
    function MockTodoService() {
        _super.apply(this, arguments);
    }
    MockTodoService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([]);
        });
    };
    MockTodoService.prototype.add = function (message) {
        return new Observable_1.Observable(function (o) {
            o.next(message);
        });
    };
    MockTodoService.prototype.remove = function (id) {
        return new Observable_1.Observable(function (o) {
            o.next(id);
        });
    };
    return MockTodoService;
}(todo_service_1.TodoService));
testing_1.describe('todo_component', function () {
    testing_1.beforeEachProviders(function () { return [core_1.provide(todo_service_1.TodoService, { useClass: MockTodoService })]; });
    //
    // describe('creation', () => {
    //   it('should create the component correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(TodoCmp).then((fixture) => {
    //       fixture.detectChanges();
    //
    //       let compiled = fixture.debugElement.nativeElement;
    //
    //       expect(compiled).toBeDefined();
    //     });
    //   }));
    //
    //   it('should inicialize the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(TodoCmp).then((fixture) => {
    //       let instance = fixture.debugElement.componentInstance;
    //
    //       spyOn(instance, '_getAll').and.callFake(() => {});
    //
    //       fixture.detectChanges();
    //
    //       expect(instance._getAll).toHaveBeenCalled();
    //     });
    //   }));
    //
    //   it('should call add correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(TodoCmp).then((fixture) => {
    //       fixture.detectChanges();
    //
    //       let instance = fixture.debugElement.componentInstance;
    //
    //       let _todoMsg = 'yo';
    //
    //       instance.add(_todoMsg);
    //     });
    //   }));
    //
    //   it('should call remove correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(TodoCmp).then((fixture) => {
    //       fixture.detectChanges();
    //
    //       let instance = fixture.debugElement.componentInstance;
    //
    //       let _id = 'abc123';
    //
    //       instance.remove(_id);
    //     });
    //   }));
    // });
});
