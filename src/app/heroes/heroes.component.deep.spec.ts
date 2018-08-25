import { ComponentFixture, TestBed } from "../../../node_modules/@angular/core/testing";

import { RouterModule } from "../../../node_modules/@angular/router";
import { NO_ERRORS_SCHEMA, Input, Component } from "../../../node_modules/@angular/core";
import { By } from "../../../node_modules/@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import {of} from 'rxjs/observable/of';
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";


describe("heroes component deep test", ()=> {

    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let Heroes;

    
    beforeEach(()=> {
        Heroes = [
            {id:1, name: 'spider', strength: 5},
            {id:2, name: 'sper', strength: 7},
            {id:3, name: 'spi', strength: 4},   
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
       
        TestBed.configureTestingModule({
            declarations : [HeroesComponent, HeroComponent],
            providers : [{provide : HeroService, useValue : mockHeroService}],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
        
    })

    it("should render hero as hero component", ()=> {
        mockHeroService.getHeroes.and.returnValue(of(Heroes));
        fixture.detectChanges();
        var a = fixture.debugElement.queryAll(By.directive(HeroComponent));
        event
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