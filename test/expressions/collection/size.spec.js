import { expect } from "chai";
import { OclParser } from "../../../lib/components/parser/OclParser";
import { OclRuleVisitor } from '../../../lib/components/OclRuleVisitor'
import { expectOclRuleValidatesToTrue } from '../../matcher'

describe('Collection->size', () => {
    it('should return the correct length of a given array', () => {
        let obj = { seq: [1,2,3] };
        const oclExpression = `context Object inv: self.seq->size() = 3`;
        expectOclRuleValidatesToTrue(oclExpression, obj);
    });

    it('should not break when seq is not defined or not an array', () => {
        let obj = { };
        const oclExpression = `context Object inv: self.seq->size() = 0`;
        expectOclRuleValidatesToTrue(oclExpression, obj);
    });

    it('should execute function calls without braces', () => {
        let obj = { seq: [1,2,3] };
        const oclExpression = `context Object inv: self.seq->size = 3`;
        expectOclRuleValidatesToTrue(oclExpression, obj);
    });
});