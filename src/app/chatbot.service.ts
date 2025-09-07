import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proizvod } from './welcome/proizvod.model';
import { ProdavnicaServis } from './welcome/prodavnica.service';
import { KorpaService } from './korpa/korpa.service';
import { Router } from '@angular/router';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();

  private botName = 'Ljubimko';

  constructor(
    private prodavnicaServis: ProdavnicaServis,
    private korpaService: KorpaService,
    private router: Router
  ) {
    this.addBotMessage(`Zdravo! Ja sam ${this.botName}. Mogu ti pomoći da pronađeš ljubimca ili da ga naručiš. Reci "pretraga" da bi pronašao ljubimca.`);
  }

  private addBotMessage(text: string): void {
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, { sender: 'bot', text }]);
  }

  private addUserMessage(text: string): void {
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, { sender: 'user', text }]);
  }

  handleUserInput(text: string): void {
    this.addUserMessage(text);
    const lowerCaseText = text.toLowerCase().trim();

    if (lowerCaseText.startsWith('pretrazi')) {
      const rasa = lowerCaseText.replace('pretrazi', '').trim();
      this.searchByRasa(rasa);
    } 
    else if (this.prodavnicaServis.getProizvod().some(p => p.rasa.toLowerCase() === lowerCaseText)) {
        this.searchByRasa(lowerCaseText);
    }
    else if (lowerCaseText === 'pretraga') {
      this.addBotMessage('Reci mi rasu ljubimca kojeg želiš da pronađeš.');
    } else {
      this.addBotMessage('Da biste počeli pretragu potrebno je upisati reč pretraga. :)');
    }
  }

  private searchByRasa(rasa: string): void {
    const sviProizvodi = this.prodavnicaServis.getProizvod();
    const pronadjeniLjubimac = sviProizvodi.find(p => p.rasa.toLowerCase() === rasa);

    if (pronadjeniLjubimac) {
      this.addBotMessage(
        `Pronašao sam ljubimca rase ${pronadjeniLjubimac.rasa}. ` +
        `Sada te prebacujem na stranicu sa detaljima.`
      );
      
      this.router.navigate(['/detalji', pronadjeniLjubimac.id]);

    } else {
      this.addBotMessage(`Žao mi je, nisam pronašao ljubimca rase "${rasa}".`);
    }
  }

  onAddToCart(proizvod: Proizvod): void {
    this.korpaService.addToCart({
      id: proizvod.id,
      slika: proizvod.slika,
      ime: proizvod.ime,
      rasa: proizvod.rasa,
      velicina: proizvod.velicina,
      godiste: proizvod.godiste,
      cena: proizvod.cena,
      kolicina: 1
    });
  }
}