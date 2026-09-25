# Cole — Portfolio (Blazor WebAssembly)

A personal portfolio site built with Blazor WebAssembly (.NET 8), deployed as a
static site to GitHub Pages via GitHub Actions.

## Pages
- **Cole's World** (`/colesworld`) — interactive top-down portfolio world with driveable locations
- **About** (`/about`) — bio and core skills
- **Experience** (`/experience`) — summary, education, and related work experience
- **Employment History** (`/employmenthistory`) — full job timeline
- **Projects** (`/projects`) — project cards
- **Contact** (`/contact`) — email, LinkedIn, and resume download

## Cole's World

### Controls
| Key | Action |
|---|---|
| `WASD` / arrow keys | Drive (on phones: drag the truck) |
| `E` / `Enter` | Enter a nearby location or open the mailbox |
| `ESC` | Back out one layer (room → front yard → outside) |
| `M` | Toggle the minimap |
| `H` | Honk (the dog barks, the fishermen complain) |
| `V` | Switch vehicle |
| `N` | Cycle time of day: day → dusk → night |
| `R` | Return to the home page |

### Time of day
The world follows the visitor's local clock: **day** 8am–6pm, **dusk** 6–8am and 6–8pm,
**night** otherwise (dark ground, glowing windows, headlights, fireflies).
Press `N` to cycle through them at any time.

### Seasons and weather
Seasonal decor switches on automatically from the visitor's date:

| Season | When | What appears | Weather |
|---|---|---|---|
| Christmas | December | Decorated tree, snowman, building lights, Santa's sleigh | Snow |
| Halloween | October | Jack-o'-lanterns, graveyard + ghost, bats, orange trees | Falling leaves |
| Thanksgiving | November | Hay bales, scarecrow, turkey, orange trees | Falling leaves |
| Easter | 2 weeks before Easter through Easter Monday | Hopping bunny, 6 clickable eggs to find | Rain showers |
| Summer | June–August | Water slide into the pond, inner tubes, beach umbrella | Rain showers |
| None | Everything else | — | Snow in Jan–Feb, otherwise rain showers |

Cloud shadows drift across the map year-round; rain showers roll through about every 5 minutes.

**Preview a season** by adding `?season=` to the Cole's World URL:

| Season | URL |
|---|---|
| Christmas | `/colesworld?season=christmas` |
| Halloween | `/colesworld?season=halloween` |
| Thanksgiving | `/colesworld?season=thanksgiving` |
| Easter | `/colesworld?season=easter` |
| Summer | `/colesworld?season=summer` |
| No decor | `/colesworld?season=none` |

Combine it with `N` to see a season at night (e.g. `?season=halloween`, then press `N` twice).

### Easter eggs
- Click the **yeti** (peeks out of the mountains) or the **bear** (surfaces in the river) while they're showing, or **pet the dog**. Progress (`★ n/3`) is saved in the browser.
- The **welcome card** shows once per browser. To see it again, clear the `world-welcomed` key from local storage.

## DNS Provider
PorkBun
