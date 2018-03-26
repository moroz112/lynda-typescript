import { ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';
import { TodoStore } from './TodoStore';


export const todoModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<TodoStore>(TodoStore).toSelf().inSingletonScope();
});

export default todoModule;