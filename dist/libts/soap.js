import { openWsdl } from './wsdl';
import { Client } from "./client";
export function createSoapClient(wsdlDef, options) {
    if (options === void 0) { options = {}; }
    return openWsdl(wsdlDef, options)
        .then(function (wsdl) {
        return new Client(wsdl);
    })
        .catch(function (err) { throw new Error(err); });
}
//# sourceMappingURL=soap.js.map