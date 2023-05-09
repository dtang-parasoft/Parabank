var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":0,"methods":[{"el":15,"sc":5,"sl":9},{"el":20,"sc":5,"sl":17},{"el":29,"sc":5,"sl":22}],"name":"A","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_2":{"methods":[{"sl":9}],"name":"testAM","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [2], [2], [2], [2], [2], [2], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
