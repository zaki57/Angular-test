import { ComponentFixture, TestBed } from "../../../node_modules/@angular/core/testing";

import { RouterModule } from "../../../node_modules/@angular/router";
import { NO_ERRORS_SCHEMA, Input, Component } from "../../../node_modules/@angular/core";
import { By } from "../../../node_modules/@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import {of} from 'rxjs/observable/of';
import { Hero } from "../hero";


describe("heroes component shallow test", ()=> {

    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let Heroes;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'  ,
      }) 
      class FakeHeroComponent {
        @Input() hero: Hero;

      }

    beforeEach(()=> {
        Heroes = [
            {id:1, name: 'spider', strength: 5},
            {id:2, name: 'sper', strength: 7},
            {id:3, name: 'spi', strength: 4},   
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
       
        TestBed.configureTestingModule({
            declarations : [HeroesComponent, FakeHeroComponent],
            providers : [{provide : HeroService, useValue : mockHeroService}]
            // schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    })

    it('should do nothing', ()=> {
        expect(true).toBe(true);
    })

    it('should set heroes correctly', ()=> {
        mockHeroService.getHeroes.and.returnValue(of(Heroes));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })
    
    it("should create one li element for each hero", ()=> {
        mockHeroService.getHeroes.and.returnValue(of(Heroes));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })
})