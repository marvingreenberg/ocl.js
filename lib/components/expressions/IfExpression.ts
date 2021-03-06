import { OclExecutionContext } from '../OclExecutionContext';

import { Expression } from './Expression';

/**
 * The IfExpression allows to execute a statement if the given condition is truthy.
 * Otherwise the else part is taken.
 */
export class IfExpression extends Expression {
    private condition: any;
    private _then: any;
    private _else: any;

    constructor(condition, _then, _else) {
        super();
        this.condition = condition;
        this._then = _then;
        this._else = _else;
    }

    getCondition(): Expression {
        return this.condition;
    }

    getThenExpression(): Expression {
        return this._then;
    }

    getElseExpression(): Expression {
        return this._else;
    }

    evaluate(visitor: OclExecutionContext, localVariables?: any): boolean {
        return this.getCondition().evaluate(visitor, localVariables)
            ? this.getThenExpression().evaluate(visitor, localVariables)
            : this.getElseExpression().evaluate(visitor, localVariables);
    }

}
