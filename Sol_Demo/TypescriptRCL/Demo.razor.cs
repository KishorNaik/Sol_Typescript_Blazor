using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;

namespace TypescriptRCL
{
    public partial class Demo
    {
        [Inject]
        public IJSRuntime JSRuntime { get; set; }

        private void ShowPrompt()
        {
            ExampleJsInterop.Prompt(JSRuntime, "Hello");
        }
    }
}