(function(karma) {
    function thisCodeWillNotBeCovered() {
        return
    }
    karma.start = function() {
        karma.info({total: 1});
        karma.result({
            description: "",
            suite: [],
            success: true,
            log: [],
            time: 0
        });
        karma.complete({
            coverage: window.__coverage__
        });
    };
})(window.__karma__);
