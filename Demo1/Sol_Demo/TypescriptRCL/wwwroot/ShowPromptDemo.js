var ShowPromptDemoNameSpace;
(function (ShowPromptDemoNameSpace) {
    var ShowPromptDemo = /** @class */ (function () {
        function ShowPromptDemo() {
        }
        ShowPromptDemo.prototype.ShowPrompt = function (message) {
            return prompt(message, "Type anything here");
        };
        return ShowPromptDemo;
    }());
    ShowPromptDemoNameSpace.ShowPromptDemo = ShowPromptDemo;
    function Load() {
        window["showPromptDemo"] = new ShowPromptDemo();
    }
    ShowPromptDemoNameSpace.Load = Load;
})(ShowPromptDemoNameSpace || (ShowPromptDemoNameSpace = {}));
ShowPromptDemoNameSpace.Load();
//# sourceMappingURL=ShowPromptDemo.js.map