using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sol_Demo.Pages.Demo
{
    public partial class Timer
    {
        #region Inject Property

        [Inject]
        private IJSRuntime JsRuntime { get; set; }

        #endregion Inject Property

        #region State Property

        private MarkupString CurrentTime { get; set; } = new MarkupString("");

        #endregion State Property

        #region Event Handler

        private Action OnGetCurrentTime { get; set; }

        #endregion Event Handler

        #region Lifecycle

        protected override void OnAfterRender(bool firstRender)
        {
            if (firstRender)
            {
                OnGetCurrentTime = async () =>
                {
                    var getDateTime = await JsRuntime.InvokeAsync<string>("app.GetCurrentDateTime");
                    CurrentTime = new MarkupString(getDateTime);
                    base.StateHasChanged();
                };

                base.StateHasChanged();
            }
        }

        #endregion Lifecycle
    }
}