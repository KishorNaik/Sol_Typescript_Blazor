using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace TypescriptRCL
{
    public class ExampleJsInterop
    {
        public static ValueTask<string> Prompt(IJSRuntime jsRuntime, string message)
        {
            // Implemented in exampleJsInterop.js
            return jsRuntime.InvokeAsync<string>(
                "showPromptDemo.ShowPrompt",
                message);
        }
    }
}