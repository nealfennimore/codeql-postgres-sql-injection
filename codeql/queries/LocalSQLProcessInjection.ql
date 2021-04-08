/**
 * @id local-sql-process-injection
 * @kind problem
 */

import javascript

from DataFlow::SourceNode arg, DataFlow::CallNode call
where
    arg = DataFlow::globalVarRef("process").getAPropertyRead("argv").getAPropertyReference() and
    call = DataFlow::moduleMember("pg", "Client").getAnInstantiation().getAMethodCall("query") and
    arg.flowsTo(call.getArgument(0))
select call, "Found local CLI input passed into SQL query", arg, "Arg"
