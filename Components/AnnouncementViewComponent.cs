using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class AnnouncementViewComponent  : BaseViewComponent
    {
        public AnnouncementViewComponent() : base("AnnouncementViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
