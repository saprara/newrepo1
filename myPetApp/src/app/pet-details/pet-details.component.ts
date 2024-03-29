import {Component} from "@angular/core";
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  standalone: true,
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {
  pet: Pet | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {

    const id: string | null = activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.pet = petDataService.getPet(id);
    }
  }
}
