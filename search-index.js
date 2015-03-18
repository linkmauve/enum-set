var searchIndex = {};
searchIndex['enum-set'] = {"items":[[0,"","enum-set","A structure for holding a set of enum variants.",null,null],[3,"EnumSet","","A specialized set implementation to use enum types.",null,null],[3,"Iter","","An iterator over an EnumSet",null,null],[8,"CLike","","An interface for casting C-like enum to u32 and back. A typical\nimplementation can be seen below:",null,null],[10,"to_u32","","Converts a C-like enum to a `u32`.",0,{"inputs":[{"name":"clike"}],"output":{"name":"u32"}}],[10,"from_u32","","Converts a `u32` to a C-like enum. This method only needs to be safe\nfor possible return values of `to_u32` of this trait.",0,{"inputs":[{"name":"clike"},{"name":"u32"}],"output":{"name":"self"}}],[11,"cmp","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"enumset"}],"output":{"name":"enumset"}}],[11,"fmt","","",1,{"inputs":[{"name":"enumset"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",1,{"inputs":[{"name":"enumset"},{"name":"h"}],"output":null}],[11,"new","","Returns an empty `EnumSet`.",1,{"inputs":[{"name":"enumset"}],"output":{"name":"enumset"}}],[11,"len","","Returns the number of elements in the given `EnumSet`.",1,{"inputs":[{"name":"enumset"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `EnumSet` is empty.",1,{"inputs":[{"name":"enumset"}],"output":{"name":"bool"}}],[11,"clear","","",1,{"inputs":[{"name":"enumset"}],"output":null}],[11,"is_disjoint","","Returns `false` if the `EnumSet` contains any enum of the given `EnumSet`.",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"is_superset","","Returns `true` if a given `EnumSet` is included in this `EnumSet`.",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"is_subset","","Returns `true` if this `EnumSet` is included in the given `EnumSet`.",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"bool"}}],[11,"union","","Returns the union of both `EnumSets`.",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[11,"intersection","","Returns the intersection of both `EnumSets`.",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[11,"insert","","Adds an enum to the `EnumSet`, and returns `true` if it wasn't there before",1,{"inputs":[{"name":"enumset"},{"name":"e"}],"output":{"name":"bool"}}],[11,"remove","","Removes an enum from the EnumSet",1,{"inputs":[{"name":"enumset"},{"name":"e"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` if an `EnumSet` contains a given enum.",1,{"inputs":[{"name":"enumset"},{"name":"e"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over an `EnumSet`.",1,{"inputs":[{"name":"enumset"}],"output":{"name":"iter"}}],[6,"Output","","",null,null],[11,"sub","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[6,"Output","","",null,null],[11,"bitor","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[6,"Output","","",null,null],[11,"bitand","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[6,"Output","","",null,null],[11,"bitxor","","",1,{"inputs":[{"name":"enumset"},{"name":"enumset"}],"output":{"name":"enumset"}}],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"from_iter","","",1,{"inputs":[{"name":"enumset"},{"name":"i"}],"output":{"name":"enumset"}}],[11,"extend","","",1,{"inputs":[{"name":"enumset"},{"name":"i"}],"output":null}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null]],"paths":[[8,"CLike"],[3,"EnumSet"],[3,"Iter"]]};
initSearch(searchIndex);
