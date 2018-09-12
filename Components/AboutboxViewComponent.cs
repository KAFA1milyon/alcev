using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class AboutboxViewComponent  : BaseViewComponent
    {
        public AboutboxViewComponent() : base("AboutboxViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
