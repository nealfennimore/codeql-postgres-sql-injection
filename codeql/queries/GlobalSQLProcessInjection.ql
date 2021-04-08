/**
 * @id global-sql-process-injection
 * @kind path-problem
 */

import javascript
import DataFlow
import DataFlow::PathGraph

class CommandLineSQLQueryConfiguration extends TaintTracking::Configuration {
  CommandLineSQLQueryConfiguration() { this = "CommandLineSQLQueryConfiguration" }

  override predicate isSource(DataFlow::Node source) {
    DataFlow::globalVarRef("process").getAPropertyRead("argv").getAPropertyRead()  = source
  }

  override predicate isSink(DataFlow::Node sink) {
    DataFlow::moduleMember("pg", "Client").getAnInstantiation().getAMethodCall("query").getArgument(0) = sink
  }
}

from CommandLineSQLQueryConfiguration cfg, PathNode source, PathNode sink
where cfg.hasFlowPath(source, sink)
select sink.getNode(), source, sink, "CLI input passed into SQL $@.", source.getNode(), "query"