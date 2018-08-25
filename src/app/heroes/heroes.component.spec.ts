import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component";
import {of} from 'rxjs/observable/of';

describe("HeroesComponent", ()=> {
    let component: HeroesComponent;
    let Heroes;
    let mockHeroService;
    

    beforeEach(()=> {
        Heroes = [
            {id:1, name: 'spider', strength: 5},
            {id:2, name: 'sper', strength: 7},
            {id:3, name: 'spi', strength: 4},   
        ];
    })

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);

    describe("delete", ()=> {
        it("should remove the indicated hero from the list", ()=> {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = Heroes;
            component.delete(Heroes[2]);

           // expect(component.heroes.length).toBe(2);
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(Heroes[2]);
        })
    })
})