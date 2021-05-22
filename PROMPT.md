## Front-End Coding Evaluation

This challenge is meant to resemble some of the front-end work we've done and will need to
do on our internal dashboard's webpages. Once we've installed our product in a building, we
need to monitor temperatures and the connectivity of our devices in order to spot problems.

Our database contains a representation of each building's floorplan, the devices (nodes) that
are installed there, and the messages they have sent to the server. As a stand-in for our
database, we've included a JSON document with data similar to what a webpage on our
dashboard would be able to retrieve from our servers. In this case, we're looking at a small
residential building.

Using whichever tools and frameworks you prefer, show us how you might organize and
display this information on a webpage. We're not expecting a robust server program, much less
a highly interactive web app. But we do expect that you use the data given to render a page.

More than anything else, this page should make apparent these two kinds of irregularities in
our systems:

- Devices that are offline
- Unusual temperatures

When you're done, push your code to a public repository and send us a link at
johnking@radiatorlabs.com or frank@radiatorlabs.com.

## Notes about the data

The root object in the JSON is a single building, which branches into many floor objects. It
contains a timestamp (milliseconds since Unix epoch) called retrieved_at . This provides a
reference point for the other timestamps included elsewhere.

Within each floor, there are units (apartments) and spaces (rooms, hallways, etc.)

Finally, in each of the spaces , there are radiators and the devices ( nodes ) installed on
them. Some spaces may have not radiators, and some radiators may not have any node
objects, i.e. they might not have any devices installed on them.

Here's an overview of the structure:

```javascript
{
  "floors" : [
  {
  "units" : [
  {
  "spaces" : [
  {
  "radiators" : [
  {
  "nodes" : [
  {

  "last_message" : ...,
  "lora_euid" : ...,
  "radiator_temperature" : ...,
  "room_temperature" : ...,

  },
  ...
  ],
  ...
  },
  ...
  ],
  ...
  },
  ...
  ],
  ...
  },
  ...
  ],
  ...
  },
  "spaces" : [
  ...
  ],
  ...
  ],
  "name" : "1234 Test Street",
  ...
}
```

The node objects contain the most directly relevant information:

- Time of last communication
- Radiator Temperature (Fahrenheit)
- Room Temperature (Fahrenheit)
  Using this data model, here are some real-world cases we've put into the data:
- Unit 1A contains an unusually long radiator requiring two electronics kits.
- There is a room called "Common Area" that does not belong to any apartment unit.
- Hence, the spaces array in each of the floor objects.
- There is a radiator in the penthouse that is not receiving steam.
- The resident in Apartment 2D has opted out of having our devices installed or has not
  been available for an installation yet.
- A handful of nodes have been unplugged by residents or are otherwise offline.

Most of the other timestamps in last_message fields are very close to the retrieved_at
date. We won't fault you for representing the timestamps in whichever time zone is easiest.

The time you should get from decoding retrieved_at is:
12:15AM on April 8th 2021 (UTC) or 08:15PM on April 7th 2021 (EST)
