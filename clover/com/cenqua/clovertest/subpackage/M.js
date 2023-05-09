var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":16,"methods":[{"el":13,"sc":5,"sl":8},{"el":17,"sc":5,"sl":15}],"name":"M","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":8}],"name":"testM","pass":true,"statements":[{"sl":9},{"sl":10}]},"test_1":{"methods":[{"sl":8},{"sl":15}],"name":"testMM","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":16}]},"test_2":{"methods":[{"sl":8},{"sl":15}],"name":"testAM","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [0, 1, 2], [0, 1, 2], [0, 1, 2], [], [], [], [], [1, 2], [1, 2], [], []]
