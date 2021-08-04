namespace ShowPromptDemoNameSpace {
    export class ShowPromptDemo {
        public ShowPrompt(message: string): string {
            return prompt(message, "Type anything here");
        }
    }

    export function Load(): void {
        window["showPromptDemo"] = new ShowPromptDemo();
    }
}

ShowPromptDemoNameSpace.Load();