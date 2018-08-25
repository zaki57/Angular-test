import { ComponentFixture, TestBed } from "../../../node_modules/@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { RouterModule } from "../../../node_modules/@angular/router";
import { NO_ERRORS_SCHEMA } from "../../../node_modules/@angular/core";
import { By } from "../../../node_modules/@angular/platform-browser";


describe("hero component shallow test", ()=> {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations : [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
    })

    it("should have correct hero", ()=> {
        fixture.componentInstance.hero =  {id:1, name: 'sper', strength: 7}

        fixture.detectChanges();

        let dea = fixture.debugElement.query(By.css('a'));
        expect(dea.nativeElement.textContent).toContain('sper');

     
      expect(fixture.nativeElement.querySelector('a').textContent).toContain('sper');
    })
})