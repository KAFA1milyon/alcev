using System;
using Microsoft.AspNetCore.Mvc;

namespace Alcev.Components.Base
{
    public abstract class BaseViewComponent : ViewComponent
    {
        //private readonly Stopwatch _stopwatch = new Stopwatch();
        //private readonly string _componentName;

        protected BaseViewComponent(string componentName){
        }

        ~BaseViewComponent(){
        }
    }
}
