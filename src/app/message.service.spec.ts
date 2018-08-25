import { MessageService } from "./message.service";

it("should have messages to start", ()=> {
    var service = new MessageService;
    expect(service.messages.length).toEqual(0);

    it("should add a message when add is called", ()=> {
        var service =  new MessageService;
        service.add('message1');
        expect(service.messages.length).toEqual(1);
    })

    it("should clear all messages when clear is called", ()=> {
        service = new MessageService;
        service.clear();

        expect(service.messages.length).toEqual(0);
    })
})