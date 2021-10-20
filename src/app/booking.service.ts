import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url : string = "https://localhost:44362/api/Booking";

  constructor(private http : HttpClient) { }

  GetAllBookings() : Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url+'/getAllBookings');
  }
  GetBookingById(bookingId : number) : Observable<Booking> {
    return this.http.get<Booking>(this.url+'/getCustomer/'+bookingId);
 }
 ViewBookingById(bookingId : number) : Observable<Booking> {
  return this.http.get<Booking>(this.url+'/getCustomer/'+bookingId);
}
UpdateBookingId(booking : Booking)  {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.put<Booking>(this.url+"/updateBooking/"+booking.BookingId,booking,httpOptions);
}
InsertBooking(booking : Booking):Observable<Booking>{
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
return this.http.post<Booking>(this.url+"/insertBooking",booking,httpOptions);
}
DeleteBooking(bookingId : number) : Observable<Booking>{
  return this.http.delete(this.url+"/deleteBooking/"+bookingId);
}

}

