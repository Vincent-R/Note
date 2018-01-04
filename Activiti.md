## Activiti

### 流程变量

> 在流程执行或者任务执行的过程中，用于设置和获取变量，使用流程变量在流程传递的过程中传递业务参数。  
对应的表：  
`act_ru_variable`:正在执行的流程变量表  
`act_hi_varinst`:流程变量历史表

* `setVariable`和`setVariableLocal`的区别
> `setVariable`:设置流程变量的时候，流程变量名称相同的时候，后一次的值替换前一次的值，而且可以看到TASK_ID的字段不会存放任务ID的值。

> `setVariableLocal`:  
1.设置流程变量的时候，针对当前活动的节点设置流程变量，如果一个流程中存在2个活动节点，对每个活动节点都设置流程变量，即使流程变量的名称相同，后一次的版本的值也不会替换前一次版本的值，它会使用不同的任务ID作为标识，存放2个流程变量值，而且可以看到TASK_ID的字段会存放任务ID的值。  
2.使用setVariableLocal说明流程变量绑定了当前的任务，当流程继续执行时，下个任务获取不到这个流程变量（因为正在执行的流程变量中没有这个数据），所有查询正在执行的任务时不能查询到我们需要的数据，此时需要查询历史的流程变量。  
3.可以简单认为，variable都是针对processInstance的。local可能是针对某个execution分支的，也可能针对task的。


### 完成任务
* 标志任务完成的方法有两种。其中包含的参数是给下一个任务使用的
> 方法一：`formService.submitTaskFormData(taskId, variables);`  
方法二：`taskService.complete(taskId, variables);`

### 任务签收
* taskService.claim和taskService.setAssignee
> claim与setAssignee区别在于claim领取之后别人不可以再领取不然会报错而setAssignee则不然