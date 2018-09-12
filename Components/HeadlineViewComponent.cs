using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class HeadlineViewComponent  : BaseViewComponent
    {
        public HeadlineViewComponent() : base("HeadlineViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
