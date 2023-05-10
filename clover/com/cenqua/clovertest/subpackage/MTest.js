var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":22,"methods":[{"el":10,"sc":5,"sl":8},{"el":16,"sc":5,"sl":12},{"el":24,"sc":5,"sl":18}],"name":"MTest","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":8}],"name":"testM","pass":true,"statements":[{"sl":9}]},"test_1":{"methods":[{"sl":12}],"name":"testMM","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":15}]},"test_2":{"methods":[{"sl":18}],"name":"testAM","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [0], [0], [], [], [1], [1], [1], [1], [], [], [2], [2], [2], [2], [], [2], [], [], []]
