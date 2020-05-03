export function checkResponse(result: any, output: any, spy: jasmine.Spy, url: string, done: DoneFn) {
  result.subscribe((response: any) => {
    expect(spy.calls.mostRecent().args[0]).toEqual(url);
    expect(response).toEqual(output);
    done();
  });
}
