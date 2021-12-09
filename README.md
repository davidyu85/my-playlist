# my-playlist

My own playlist that consumes OMDb Apis. This took 4 hours to implement, span across two mornings with multiple breaks in between.

### Features
- You can search for movies from OMDb (minimal 3 characters required).
- You can add and remove movies and place it into the playlist.
- In playlist indicator shown on search result.
- Build suitable for mobile.

### Demo link
https://davidyu85.github.io/my-playlist/

### Questions

**What were the most difficult tasks?**

The most difficult is to get the design right that suits for mobile. Generally speaking, the implementation of this app is alright, although sometimes strict typing in TypeScript can give me a real headache - but it is expected and is important to have these annotations in place.

**Did you learn anything new while completing this assignment?**

Writing some test even for small applications and get it to run side by side inside Vscode, can already benefit the development process. I have captured so many breakages throughout the implementation and are able to fix them up immediately without having to switch to the browser.

Fun fact: I accidentally discovered that Jest testing on api calls, actually does make a legit call and works without having to mock, which is interesting. Not saying that this is the pattern I will be using for any future work, but it is an interesting finding for me and saves me time not having to write a mock.

**What did you not have time to add? What work took the up majority of your time?**

I overspent the time tweaking the styles (total approximate time took 1 half hour) and resulting myself to rush at the end. Originally, my plan was to make pagination to work in the search page, but didn't have the time to complete - although the facility is already in place, I dropped it because there will be too many design consideration. Nevertheless this is not in the requirement.

I have yet to complete adding suspense when data is loading and I should have add that, yet again, not in the requirements.

I ran out of time adding a few test on the playlist.

**How could the application to be improved?**

A server-side data state management library would be beneficial for this application if it is going to be in full-scale development. Some out-of-the-box solutions like React Query would be useful for managing re-fetching, caching and garbage collection, which in a long run, making this application to be perceived as high performing due to cached data is available with decent re-fetching capability.

HashRouter is set up in this applications due to BrowserRouter does not function well in GitHub pages. In real world implementation, BrowserRouter usually would be preferable over HashRouter.

The current Jest test gets Axios do the legit api call to OMDb, although saves test-writing time (because I don't have to mock anything), it does make the test less performant, making TDD less possible. Relying on real api calls similar to E2E testing, may also result test to be more flaky, although it is not perceivable in the test written here.

Performance wise, I am aware that whenever a movie block is toggled, it triggers the re-render to the entire list of movie blocks. This is due to the way how React Context got hooked, when the data object updated, re-renders would be triggered to all connected components. In the current application, performance impact is neglectable due to OMDb restricts retrieving 10 entires per search. This would be problematic if the list becomes larger. This may be improved by making those component less tied up with React Context and offshore to component state solutions to minimise re-renders.

React Window is also a good library for rendering optimisation, if infinite scrolling list is required.