using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class SchoolsViewComponent  : BaseViewComponent
    {
        public SchoolsViewComponent() : base("SchoolsViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
