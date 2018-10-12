import { Injectable } from "@angular/core";
import { ISession } from "../shared/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class VoterService{
    
    constructor(private http: HttpClient){}

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)
        
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
        .pipe(catchError(this.handlerError('addVoter')))
       .subscribe();
        }

    addVoter(eventId: number, session: ISession, voterName: string) {
       session.voters.push(voterName);

       const options= {headers: new HttpHeaders ({'Content-Type':'/application/json'})};
       const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, {}, options)
       .pipe(catchError(this.handlerError('addVoter')))
       .subscribe();
    }
    
    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName)
    }

    private handlerError<T> (operation = 'operation', result?: T){
        return (error: any) : Observable<T> => {
          console.log(error);
          return of(result as T);
        }
      }

}