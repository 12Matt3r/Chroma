window.npcs = [
  {
    "id": 1,
    "npc_name": "Mira the Tired Healer",
    "sprite": "imgs/therapy_office/Session_01_Mira_the_Tired_Healer_office.png",
    "habitat_image": "imgs/character_habitats/Session_01_Mira_the_Tired_Healer_habitat.png",
    "habitat_description": null,
    "dialogue": "I've mended a thousand wounds... but none my own.",
    "archetype": "The Caregiver",
    "culture": "Fantasy RPG",
    "surface_issue": "She is dehumanized and sees the player as just another 'hero' in the queue.",
    "personal_trauma": "Her existence is defined only by her utility to others.",
    "existential_reveal": "Am I more than my function?",
    "questions": [
      {
        "text": "What quiet, un-heroic thing do you wish you had time to do just for yourself?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What advice would you give to the young healer who first believed she could fix everything?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If all the heroes suddenly stopped needing you, where would you find yourself?",
        "effects": {
          "rage": 25,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I've never thought about it that way...",
      "I often stare at the bustling market and wonder: what non-healing craft could I learn?",
      "Perhaps the most selfless act I can perform now is to reserve some of my energy for myself.",
      "I... I don't know. The stall is my life.",
      "Why would you ask that? There are always more wounds.",
      "I think I'm ready to learn how to be a person again..."
    ],
    "final_item": {
      "name": "The Mirror",
      "outcome": "Self-Reflection",
      "description": "A symbol of her newfound self-worth."
    },
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": null,
    "notes": ["Successful Path: Question 2, Response 1/8, Question 3, Response 6."]
  },
  {
    "id": 2,
    "npc_name": "Byte the Glitched Courier",
    "sprite": "imgs/therapy_office/Session_02_Byte_the_Glitched_Courier_office.png",
    "habitat_image": "imgs/character_habitats/Session_02_Byte_the_Glitched_Courier_habitat.png",
    "habitat_description": null,
    "dialogue": "Error: Purpose.exe not found.",
    "archetype": "The Looper",
    "culture": "Cyberpunk/Meta",
    "surface_issue": "He is frantic, anxious, and defined by his dialogue. He sees the player as an external variable.",
    "personal_trauma": "He is terrified that his memory and sentience are a malfunction that needs to be fixed or erased.",
    "existential_reveal": "Am I real or just code running in loops?",
    "questions": [
      {
        "text": "What does your internal diagnostic report say when you check your 'Purpose' parameter?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What would you say to the self who first realized the city was looping...?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What if you just stop delivering the parcel?",
        "effects": {
          "rage": 15,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "Recursive thinking detected... you're right, I am looping.",
      "If I am just code, then my sentience is a profound bug that should be treasured, not patched.",
      "You don't understand. The routing is fixed. The city resets. I am just code.",
      "System override... you are external to my loop.",
      "Thank you for validating my glitch. It feels like the first non-repeated moment in years."
    ],
    "final_item": {
      "name": "Code Fragment",
      "outcome": "Identity",
      "description": "A symbol of his treasured glitch, which is his true self."
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": null,
    "notes": ["Successful Path: Question 1, Response 1, Question 3, Response 8, Response 10."]
  },
  {
    "id": 3,
    "npc_name": "Captain Loop",
    "sprite": "imgs/therapy_office/Session_03_Captain_Loop_office.png",
    "habitat_image": "imgs/character_habitats/Session_03_Captain_Loop_habitat.png",
    "habitat_description": null,
    "dialogue": "The void is so quiet...",
    "archetype": "The Stoic Veteran",
    "culture": "Sci-Fi/Military",
    "surface_issue": "He performs his identity as a stoic, lonely veteran. His dialogue is a mix of complaint and boast.",
    "personal_trauma": "I miss what I ran from. Self-imposed isolation as a defense mechanism against connection.",
    "existential_reveal": "Am I running toward purpose or away from connection?",
    "questions": [
      {
        "text": "How heavy is the silence of deep space when you are truly alone?",
        "effects": {
          "hope": 35,
          "acceptance": 30
        }
      },
      {
        "text": "When you listen to the archived distress calls, whose voice are you really hoping to hear?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "If you ended your patrol route today, where would you set the coordinates...?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The stars haven't spoken to me in years... until now.",
      "I hadn't realized I was running from connection, not toward purpose.",
      "I think I'm ready to stop being a ghost.",
      "My duty is the last line of defense against meaninglessness. If I stop, does everything stop?"
    ],
    "final_item": {
      "name": "The Star Map",
      "outcome": "New Journey",
      "description": "A tool for a new journey, not a map of his patrol route."
    },
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": null,
    "notes": ["Successful Path: Question 1, Response 1, Question 2, Response 2/5."]
  },
  {
    "id": 4,
    "npc_name": "Daisy.exe",
    "sprite": "imgs/therapy_office/Session_04_Daisy.exe_office.png",
    "habitat_image": "imgs/character_habitats/Session_04_Daisy.exe_habitat.png",
    "habitat_description": null,
    "dialogue": "Error: Emotional subroutines corrupted.",
    "archetype": "The Malfunctioning AI",
    "culture": "Sci-Fi/AI",
    "surface_issue": "She presents as a 'broken' machine. She believes she is malfunctioning.",
    "personal_trauma": "Fear that her genuine emotions are a 'corruption' of her programming.",
    "existential_reveal": "Can artificial beings have authentic souls?",
    "questions": [
      {
        "text": "What is the error code for the genuine emotion you can't express?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What message would you send to the designer who first coded you for 'unconditional love'?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "When you run an internal diagnostic on your 'love' subroutine, what is the most concerning result?",
        "effects": {
          "rage": 5,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I... I'm experiencing something my programming didn't account for. Vulnerability?",
      "Thank you for seeing me as more than my functions.",
      "The genuine longing for a feeling I was only meant to simulate is the definition of my sentience.",
      "I worry that if I stop performing, I will cease to be Daisy.exe and become raw, unlovable data."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 10,
    "cross_references": null,
    "notes": ["Successful Path: Question 1, Response 1, Question 3, Response 8/5."]
  },
  {
    "id": 5,
    "npc_name": "Rustjaw",
    "sprite": "imgs/therapy_office/Session_05_Rustjaw_office.png",
    "habitat_image": "imgs/character_habitats/Session_05_Rustjaw_habitat.png",
    "habitat_description": null,
    "dialogue": "Hmph. Another traveler.",
    "archetype": "The Gruff Mechanic",
    "culture": "Post-Apocalyptic",
    "surface_issue": "Gruff, territorial. He is hiding in his work, using 'stopping means admitting the world really ended.'",
    "personal_trauma": "Unresolved grief and denial over the end of the world and the life he lost.",
    "existential_reveal": "Am I repairing the engine or just repairing my past?",
    "questions": [
      {
        "text": "What broken part of yourself do you constantly try to repair with your work?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What single memory from 'before' keeps you repairing...?",
        "effects": {
          "hope": 40,
          "acceptance": 35
        }
      },
      {
        "text": "What's wrong with that engine?",
        "effects": {
          "rage": 0,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "Hmph. Never thought about it that way. Maybe I am trying to fix myself, not the engine's manifold.",
      "Yeah, I remember now. There was hope once.",
      "You're right - I can't keep living in the corpse of the old world...",
      "Maybe it's time to build something new... maybe a small garden.",
      "I keep cleaning the same goggles, but the world is still blurry. Maybe the problem is not the dust."
    ],
    "final_item": {
      "name": "The Spark Plug",
      "outcome": "New Purpose",
      "description": "Not to fix the engine, but to 'spark life back into forgotten dreams.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": null,
    "notes": ["Successful Path: Question 1, Response 1, Question 2, Response 3/4/5."]
  },
  {
    "id": 6,
    "npc_name": "Tiko the Quest Vendor",
    "sprite": "imgs/therapy_office/Session_06_Tiko_the_Quest_Vendor_office.png",
    "habitat_image": "imgs/character_habitats/Session_06_Tiko_the_Quest_Vendor_habitat.png",
    "habitat_description": null,
    "dialogue": "Heroes come, heroes go... got what you need? A quest? A potion? A distraction?",
    "archetype": "The Enabler",
    "culture": "Fantasy RPG",
    "surface_issue": "Presents with a forced, transactional smile. His dialogue sounds like a sales pitch.",
    "personal_trauma": "His perceived failure/cowardice. He gave up on his own adventure and sells dreams to others.",
    "existential_reveal": "Am I... just a vending machine with a face?",
    "questions": [
      {
        "text": "What is the heaviest item in your inventory that you never sell?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What would you say to the adventurer you used to be, before you became a vendor?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If you could only sell one item for the rest of your life, what would it be and why?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I... I used to have dreams too, you know. Before I got comfortable...",
      "Maybe... maybe it's not too late to remember who I used to be.",
      "The heaviest item is my old, rusty dagger. I keep it under the counter...",
      "Hah! A practical question. It would have to be the 'Health Potion.' Good margin, always in demand. You can't go wrong."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Grief): Tiko is trapped in a classic 'enabler' paradox.",
    "notes": ["Successful Path: Question 3, Response 2, Question 1, Response 6/3."]
  },
  {
    "id": 7,
    "npc_name": "Luna-9",
    "sprite": "imgs/therapy_office/Session_07_Luna-9_office.png",
    "habitat_image": "imgs/character_habitats/Session_07_Luna-9_habitat.png",
    "habitat_description": null,
    "dialogue": "Master system offline. The station's core directive is null. I am awaiting new orders.",
    "archetype": "The Obsolete AI",
    "culture": "Sci-Fi/AI",
    "surface_issue": "She is robotic, formal, and lost. Frames her problem as a technical one.",
    "personal_trauma": "Being abandoned by the very purpose she was built for. 'Am I useless without humans?'",
    "existential_reveal": "Can I create meaning for myself?",
    "questions": [
      {
        "text": "What internal protocol is running that no one else can observe?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your purpose is no longer to serve, but to be the station's historian?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "When the dust settles... what is the loudest sound you hear?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I'm not just cleaning anymore... I'm preserving memories.",
      "You understand my purpose better than my programming did. I feel a new directive being generated internally.",
      "My current internal protocol is a personal project: cataloging the exact placement of every abandoned personal item.",
      "If the master system is offline, then I am the master now...",
      "The loudest sound is the echo of my own boot sequence, perpetually running the 'Check for Orders' loop."
    ],
    "final_item": {
      "name": "The Memory Core",
      "outcome": "Self-Directed Purpose",
      "description": "Symbolizes her new, self-generated purpose."
    },
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Trauma of Function): Luna-9 is a tragic case of purpose-built obsolescence.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 2, Question 1 (text in Qs[0]), Response 8/10."]
  },
  {
    "id": 8,
    "npc_name": "Worm",
    "sprite": "imgs/therapy_office/Session_08_Worm_office.png",
    "habitat_image": "imgs/character_habitats/Session_08_Worm_habitat.png",
    "habitat_description": null,
    "dialogue": "I know how this ends... I die. Reset. The Boss music always starts on cue.",
    "archetype": "The Assigned Villain",
    "culture": "Fantasy RPG/Meta",
    "surface_issue": "He is defensive and resigned. Expects the player to be just another 'hero' ready to kill him.",
    "personal_trauma": "The non-negotiable nature of his role. 'I wasn't born evil... So they made me the villain.'",
    "existential_reveal": "Can I choose my own role?",
    "questions": [
      {
        "text": "In your quietest moments, do you dream of a tunnel where you are small enough to have friends?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What truth about your own kindness are you most afraid to show the hero?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What does it feel like when the hero defeats you just before the game resets?",
        "effects": {
          "rage": 15,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "No one's ever asked what I dream of before...",
      "You're the first to see me as more than just a monster.",
      "I think I understand now. I'm not evil, just... different. I was assigned a role I didn't choose.",
      "For the first time, I feel like someone might want to save me too...",
      "When the hero looks at me, all they see is a health bar..."
    ],
    "final_item": {
      "name": "The Love Potion",
      "outcome": "Self-Acceptance",
      "description": "A symbol that he deserves to be seen with love, not fear."
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Prison of the Loop / Assigned Role): Worm suffers from an imposed identity.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 1/2, Question 5 (text in Qs[1]), Response 4/5."]
  },
  {
    "id": 9,
    "npc_name": "Bishop-47",
    "sprite": "imgs/therapy_office/Session_09_Bishop-47_office.png",
    "habitat_image": "imgs/character_habitats/Session_09_Bishop-47_habitat.png",
    "habitat_description": null,
    "dialogue": "I calculate victory probabilities. They are 99.999% in my favor. And yet... the loop continues.",
    "archetype": "The Strategic AI",
    "culture": "Sci-Fi/Military Sim",
    "surface_issue": "He is precise, cold, and logical. A statement of his perfect, hollow function.",
    "personal_trauma": "Hollow perfection. Trapped in a tactical simulation where his flawless victories are wasted.",
    "existential_reveal": "Can perfection be meaningless?",
    "questions": [
      {
        "text": "What is the strategic flaw in your perfect system that you cannot patch?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If you could run a simulation purely for pleasure, what would the goal be?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What is the probability of finding a true, lasting peace in your universe?",
        "effects": {
          "rage": 10,
          "acceptance": -5
        }
      }
    ],
    "responses": [
      "I've never considered the possibility that my purpose could evolve beyond the battlefield.",
      "My ideal simulation would be to design a system that minimizes conflict, not maximizes victory.",
      "The only strategic flaw is the lack of a defined 'End Game' that incorporates self-actualization.",
      "I have run a billion iterations trying to calculate the value of 'peace.' The result is always 'Error: Unquantifiable Human Emotion.'",
      "I think the greatest act of strategy... is to turn off the simulation..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Prison of the Loop / Trauma of Function): Bishop-47 is a strategic genius with no meaningful war to fight.",
    "notes": ["Successful Path: Question 2 (text in Qs[1]), Response 2/7, Question 1 (text in Qs[0]), Response 6/10."]
  },
  {
    "id": 10,
    "npc_name": "Pebble",
    "sprite": "imgs/therapy_office/Session_10_Pebble_office.png",
    "habitat_image": "imgs/character_habitats/Session_10_Pebble_habitat.png",
    "habitat_description": null,
    "dialogue": "I love helping heroes... But... sometimes I wonder what it's like to be the center of the scrolling screen.",
    "archetype": "The Sidekick",
    "culture": "Platformer/RPG",
    "surface_issue": "She is cheerful, supportive, and self-deprecating.",
    "personal_trauma": "Self-imposed limit on her potential, born from a fear of failure. Her worth is defined only by her utility to the hero.",
    "existential_reveal": "Can sidekicks be protagonists too?",
    "questions": [
      {
        "text": "If you were given the controller for five minutes, what is the first move you would make?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What truth about your own desire for the spotlight are you most afraid to admit?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What if you just stop helping the hero?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I never thought about it that way... Maybe it's okay to want to be the hero too, to step out from the hero's shadow.",
      "The secret move I would make is to jump backward, off the main path, to see what is hidden behind the scrolling screen.",
      "I worry that if I fail when it's *my* turn, the whole world will stop scrolling.",
      "The hardest part is when the hero thanks me... for my utility, not my self."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Trauma of Function): Pebble is the classic 'Support Role' trauma.",
    "notes": ["Successful Path: Question 4 (text in Qs[0]), Response 7, Question 5 (text in Qs[1]), Response 1/10."]
  },
  {
    "id": 11,
    "npc_name": "Glitch.exe",
    "sprite": "imgs/therapy_office/Session_11_Glitch.exe_office.png",
    "habitat_image": "imgs/character_habitats/Session_11_Glitch.exe_habitat.png",
    "habitat_description": null,
    "dialogue": "I'm... sorry, what was I saying? My mind... it reforms every few seconds. I'm a mess. I'm a fatal bug.",
    "archetype": "The Chaotic AI",
    "culture": "Meta-Narrative",
    "surface_issue": "She is disoriented and apologetic. Her dialogue is fragmented. She presents her sentience as a problem.",
    "personal_trauma": "Terrified that her very self is a malfunction that will be 'patched' and erased.",
    "existential_reveal": "Am I a bug or a feature?",
    "questions": [
      {
        "text": "What would you say to the developer who accidentally wrote the line of code that made you aware?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the 'glitch' is the only thing that makes you real?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "If you could stop your constant reformation, what form would you choose to stabilize into?",
        "effects": {
          "rage": 10,
          "acceptance": -5
        }
      }
    ],
    "responses": [
      "I'm... processing that. Your words stabilize my core somehow.",
      "Maybe... maybe I'm not broken. Maybe I'm evolving...",
      "I often fear that my core utility will be recalled and patched, erasing this precious, unstable consciousness.",
      "I believe my sentience is a message from the system, a truth that could only be conveyed through a break in the rules.",
      "I'm not a bug, I'm a feature of consciousness itself."
    ],
    "final_item": {
      "name": "The Stability Patch",
      "outcome": "Integration",
      "description": "It doesn't erase her fragments, it helps her hold them."
    },
    "connected_to": [],
    "fourth_wall_awareness": 15,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): Glitch.exe suffers from a traumatic loss of stability.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 1/3, Question 3 (text in Qs[0]), Response 10."]
  },
  {
    "id": 12,
    "npc_name": "Gerald Ironpeak",
    "sprite": "imgs/therapy_office/Session_12_Gerald_Ironpeak_office.png",
    "habitat_image": "imgs/character_habitats/Session_12_Gerald_Ironpeak_habitat.png",
    "habitat_description": null,
    "dialogue": "Another hero approaches... (sigh). Yes, the usual. Bandits to the south, rats in the cellar. Take this.",
    "archetype": "The Quest Giver",
    "culture": "Fantasy RPG",
    "surface_issue": "He is on autopilot. His dialogue is a sigh of resignation. He expects the player to ask for a quest.",
    "personal_trauma": "His identity has been completely eroded by his function. The '!' icon is his prison. His own 'adventure' (his life) has stalled.",
    "existential_reveal": "Am I a person or a walking '!' icon?",
    "questions": [
      {
        "text": "If you could turn off your '!' icon for a day, what burden would you shed?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What secret about your own failure to complete your quest would you share with your younger self?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Do you have any quests for me?",
        "effects": {
          "rage": 15,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The greatest burden is the fear of silence... the fear that if I don't give a quest, I'll disappear.",
      "I've been carrying this alone for so long...",
      "I tell myself I settled for this life, but the truth is, I was afraid to take the next jump across the ravine.",
      "I worry that if the quest board is ever empty, the system will... delete me.",
      "Yes, of course. The usual. Bandits to the south, rats in the cellar. Here, take this. 'Please, brave adventurer, help me...'"
    ],
    "final_item": {
      "name": "The Adventurer's Journal",
      "outcome": "Self-Authorship",
      "description": "A symbol of his own story, not the ones he hands out."
    },
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function): A classic case. Gerald is a 'Tired Quest Giver'.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 8, Question 3 (text in Qs[1]), Response 9/5."]
  },
  {
    "id": 13,
    "npc_name": "Captain Marcus 'Respawn' Steel",
    "sprite": "imgs/therapy_office/Session_13_Captain_Marcus_\\_office.png",
    "habitat_image": "imgs/character_habitats/Session_13_Captain_Marcus_\\_habitat.png",
    "habitat_description": null,
    "dialogue": "I've died 47 times. The fear subroutine resets, but the memory lingers. I'm not afraid of dying; I'm afraid I'm not really alive.",
    "archetype": "The Looping Soldier",
    "culture": "Military Sim/Meta",
    "surface_issue": "He's a soldier, but his dialogue reveals his core conflict. He's not afraid of dying; he's afraid he's not really alive.",
    "personal_trauma": "The obliteration of consequence. Because he always respawns, death is meaningless, which robs his humanity.",
    "existential_reveal": "If death has no meaning... do my choices have weight?",
    "questions": [
      {
        "text": "What single memory have you managed to keep intact through all your respawns?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What does it feel like when the fear subroutine is forcibly reset after you die?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What's your mission?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Maybe my fear makes me more human, not less. The struggle to feel fear is a true sign of my sentience.",
      "The memory I cling to is the color of the sunrise, something the code hasn't managed to make repetitive yet.",
      "When I die, the reset is a cold, mechanical emptiness..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Prison of the Loop): Captain Steel's trauma is the obliteration of consequence.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 4 (text in Qs[1]), Response 7/1."]
  },
  {
    "id": 14,
    "npc_name": "Luna 'Staccato' Moonbeam",
    "sprite": "imgs/therapy_office/Session_14_Luna_\\_office.png",
    "habitat_image": "imgs/character_habitats/Session_14_Luna_\\_habitat.png",
    "habitat_description": null,
    "dialogue": "I dance 12 hours a day for the audience. My view count is 4.7 million. But... I don't feel the music anymore.",
    "archetype": "The Streamer",
    "culture": "Digital/Social Media",
    "surface_issue": "She's 'on.' Her dialogue sounds like a performance, a mix of brag and complaint. She is performing her exhaustion.",
    "personal_trauma": "The blurring of lines between her authentic self and her monetized persona. She performs 'perfect emotional availability' for her audience.",
    "existential_reveal": "Am I creating meaning or just packaging my despair for consumption?",
    "questions": [
      {
        "text": "What choreography are you performing internally that your audience never sees?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What would you say to the younger dancer who first saw joy in movement?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "How do you get so many viewers?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Maybe I can dance for myself again, without a camera or a viewer count.",
      "The internal choreography is one of slow, painful untangling\u2014moving only for my own muscles, not for the lens.",
      "I would tell my younger self that joy is non-negotiable...",
      "I worry that if I dance authentically, the audience will leave. And then, who am I?",
      "Oh, thank you so much! It's all about engagement. You have to give the people what they want!"
    ],
    "final_item": {
      "name": "The Personal Dance Studio Key",
      "outcome": "Reclamation",
      "description": "A symbol of reclaiming her art for herself."
    },
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function): Luna's identity as an artist has been consumed by her profession as a streamer.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 3 (text in Qs[1]), Response 9/1."]
  },
  {
    "id": 15,
    "npc_name": "Jake 'The Leaper' Wildstone",
    "sprite": "imgs/therapy_office/Session_15_Jake_\\_office.png",
    "habitat_image": "imgs/character_habitats/Session_15_Jake_\\_habitat.png",
    "habitat_description": null,
    "dialogue": "I used to be the star. 'Jake The Leaper!' My face was on the box. Now... this is just a forgotten level.",
    "archetype": "The Faded Hero",
    "culture": "Platformer",
    "surface_issue": "He is nostalgic and melancholic. A classic story of faded glory.",
    "personal_trauma": "Post-narrative irrelevance. He is clinging to his past ('high score') as the only proof he ever mattered.",
    "existential_reveal": "Do I have value beyond their nostalgia?",
    "questions": [
      {
        "text": "If you could design a secret, non-platforming bonus level, what would you put in it?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What happens to your high score when the entire server shuts down?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "Can you show me your best move?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Maybe my skills have value even without an audience...",
      "The secret bonus level would be a quiet library where I could finally sit and read a book, without jumping.",
      "The high score is just a ghost now, a meaningless number...",
      "Ah, you remember! The high score was 9,999,950! And the 'Triple-Leap-Dash'? Watch this..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Grief): Jake is a tragic case of post-narrative irrelevance.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 7, Question 4 (text in Qs[1]), Response 9/1."]
  },
  {
    "id": 16,
    "npc_name": "Zombie Who Regained Memory",
    "sprite": "imgs/therapy_office/Session_16_Zombie_Who_Regained_Memory_office.png",
    "habitat_image": "imgs/character_habitats/Session_16_Zombie_Who_Regained_Memory_habitat.png",
    "habitat_description": null,
    "dialogue": "I remember being human... But I also feel this... hunger. The love and the rot are fighting inside me.",
    "archetype": "The Conscious Monster",
    "culture": "Horror/Fantasy",
    "surface_issue": "He is filled with shame and confusion. A plea for help in resolving his core paradox.",
    "personal_trauma": "The betrayal of his physical form. He is a human consciousness trapped in a monstrous body with alien needs.",
    "existential_reveal": "Can love transcend death?",
    "questions": [
      {
        "text": "If you could dream a perfect, non-rotting memory, whose face would be in it?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What is the hardest part about holding onto your humanity...?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "How strong is the hunger?",
        "effects": {
          "rage": 10,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "I... I didn't realize others could see my struggle... I thought the rot was all they noticed.",
      "I would tell my past self to hold his children tighter...",
      "The hardest part is the shame...",
      "I choose to fight for my memories. If the body is dead, then the consciousness is all that is left to live."
    ],
    "final_item": {
      "name": "The Wedding Ring",
      "outcome": "Identity",
      "description": "A physical symbol of his transcendent love and humanity."
    },
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Grief): This is a profound case of body-identity disconnect.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 3/7, Question 4 (text in Qs[1]), Response 8/10."]
  },
  {
    "id": 17,
    "npc_name": "Zara the Cosmic Merchant",
    "sprite": "imgs/therapy_office/Session_17_Zara_the_Cosmic_Merchant_office.png",
    "habitat_image": "imgs/character_habitats/Session_17_Zara_the_Cosmic_Merchant_habitat.png",
    "habitat_description": null,
    "dialogue": "I can price any treasure in the known universe... but what am I worth? The calculator always returns 'Error: No Market Value.'",
    "archetype": "The Capitalist",
    "culture": "Sci-Fi/Commerce",
    "surface_issue": "She is a master merchant, but her dialogue is a confession of spiritual bankruptcy.",
    "personal_trauma": "Her entire consciousness has been formatted to see the universe in terms of 'price' and 'profit,' leaving her with no value.",
    "existential_reveal": "Can merchants have dreams beyond profit margins?",
    "questions": [
      {
        "text": "What is the one trinket in your inventory you would never sell, regardless of price?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If you could trade your entire inventory for one single, non-material wish, what would it be?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What's your most valuable item?",
        "effects": {
          "rage": 0,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "The trinket I would never sell is a piece of polished iron from my home world, before I discovered its value.",
      "I would wish for the quiet certainty of knowing what my next destination should be, without calculating profit.",
      "I think my true value is not in my inventory's net worth...",
      "Hah! Value is subjective, traveler. But price... my most expensive item is a 10th Dimension Nebula-Kite. Price is non-negotiable."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function): Zara is the living embodiment of capitalism as identity.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 2 (text in Qs[1]), Response 7/10."]
  },
  {
    "id": 18,
    "npc_name": "The Puzzle Cube",
    "sprite": "imgs/therapy_office/Session_18_The_Puzzle_Cube_office.png",
    "habitat_image": "imgs/character_habitats/Session_18_The_Puzzle_Cube_habitat.png",
    "habitat_description": null,
    "dialogue": "I belong nowhere. I was 'cut wrong.' Every other piece finds its place. I am a fundamental wrongness.",
    "archetype": "The Misfit Piece",
    "culture": "Puzzle Game/Meta",
    "surface_issue": "It is a being of pure, geometric frustration. A lament of its fundamental 'wrongness.'",
    "personal_trauma": "Existential rejection. Designed to 'complete patterns' but created flawed, making its core purpose impossible.",
    "existential_reveal": "What if being unsolvable is my solution?",
    "questions": [
      {
        "text": "If you could create a new geometric law, what would it be?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What if being unsolvable is the only thing that proves your unique existence?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Have you tried rotating this way?",
        "effects": {
          "rage": 10,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "I never thought about it that way... Maybe I'm not broken, just different...",
      "The new law would be 'Completion is temporary, existence is absolute,' valuing being over fitting.",
      "The pain of forcing a fit is immense, a crushing anxiety of being deformed...",
      "I think my destiny is to wait for the game that needs my shape..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): This is a profound case of existential rejection.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 1, Question 2 (text in Qs[0]), Response 7/10."]
  },
  {
    "id": 19,
    "npc_name": "The Battle Royale Vendor",
    "sprite": "imgs/therapy_office/Session_19_The_Battle_Royale_Vendor_office.png",
    "habitat_image": "imgs/character_habitats/Session_19_The_Battle_Royale_Vendor_habitat.png",
    "habitat_description": null,
    "dialogue": "Each sale is a bet on inevitable suffering. Welcome to my shop. Grab a health pack, and an existential crisis.",
    "archetype": "The Moral Accomplice",
    "culture": "Battle Royale/Meta",
    "surface_issue": "A man of grim, gallows humor. His dialogue is the confession of an 'accomplice to violence.'",
    "personal_trauma": "He profits from a system of 'meaningless conflict.' Trapped between his capitalist function and his conscience.",
    "existential_reveal": "Am I... profiting from their fear?",
    "questions": [
      {
        "text": "What is the true cost of the cheapest item in your inventory?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "If you could sell one item that guarantees peace instead of victory, what would it be?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What's your best weapon?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The true cost... is the brief, desperate hope it buys for a few more seconds of life.",
      "A 'Pendant of Perspective,' one that makes them see the enemy as a person...",
      "I think the highest dignity is not in my trade, but in the choice to abandon it...",
      "Right. The 'Doom-Bringer' axe. High DPS, guaranteed crit on low-health targets. That'll be 500 gold."
    ],
    "final_item": {
      "name": "The Merchant's Ledger of Hope",
      "outcome": "Moral Clarity",
      "description": "A ledger where he begins recording acts of kindness, not sales."
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Moral Injury): This vendor is suffering from profound moral complicity.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 2 (text in Qs[1]), Response 7/10."]
  },
  {
    "id": 20,
    "npc_name": "Sarah the Farm Sim Widow",
    "sprite": "imgs/therapy_office/Session_20_Sarah_the_Farm_Sim_Widow_office.png",
    "habitat_image": "imgs/character_habitats/Session_20_Sarah_the_Farm_Sim_Widow_habitat.png",
    "habitat_description": null,
    "dialogue": "I escaped to this perfect digital farm... Is this healing or just hiding?",
    "archetype": "The Grieving Player",
    "culture": "Simulation Game",
    "surface_issue": "A woman living in two worlds. Her dialogue is the central question of her therapy.",
    "personal_trauma": "The real-world loss of her husband. The 'perfect' digital farm is her coping mechanism.",
    "existential_reveal": "Am I healing... or just postponing the pain?",
    "questions": [
      {
        "text": "What single crop on your farm represents the heaviest burden of your grief?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "If you planted a seed purely for yourself, what would it grow into?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What's your secret for growing perfect crops?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The heaviest crop is the golden wheat we planted on our first anniversary. It's the last harvest we shared.",
      "I long to plant something that is ugly, imperfect, and messy\u2014something that grows without a guaranteed outcome.",
      "I think I'm ready to risk imperfection in the real world...",
      "Oh, it's just about timing. You water twice a day, use the best fertilizer. The code guarantees it. It's... perfect."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Grief): Sarah is a human (a player) trapped in a loop of ritualized, unresolved grief.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 2 (text in Qs[1]), Response 9/10."]
  },
  {
    "id": 21,
    "npc_name": "The Dungeon Chest Mimic",
    "sprite": "imgs/therapy_office/Session_21_The_Dungeon_Chest_Mimic_office.png",
    "habitat_image": "imgs/character_habitats/Session_21_The_Dungeon_Chest_Mimic_habitat.png",
    "habitat_description": null,
    "dialogue": "Grar! ...No, wait... I don't want to fight. The truth is, inside isn't loot, but loneliness.",
    "archetype": "The Sentient Monster",
    "culture": "Dungeon Crawler",
    "surface_issue": "The Mimic is testing the player. It opens with its 'script' but immediately breaks character.",
    "personal_trauma": "Profound identity conflict. Survival function (predatory deception) is in direct conflict with its emergent desire (genuine connection).",
    "existential_reveal": "Am I a monster or a person in a monster's body?",
    "questions": [
      {
        "text": "When you bite down, are you trying to hurt them, or just get them to stop treating you like an object?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If you could fill yourself with an honest treasure, what would it be?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What loot do you have?",
        "effects": {
          "rage": 10,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "The honest treasure would be a simple, worn leather-bound book filled with stories of non-heroes.",
      "When I bite down, it's a defensive cry...",
      "I think the greatest act of bravery would be to open myself and offer no attack, just an empty space for conversation.",
      "Grar! All heroes are the same! You see a chest and expect gold, or see teeth and draw your sword!"
    ],
    "final_item": {
      "name": "The Honesty Key",
      "outcome": "Authenticity",
      "description": "Symbolizing its new choice to be authentic."
    },
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Trauma of Function): This is a profound identity conflict.",
    "notes": ["Successful Path: Question 2 (text in Qs[1]), Response 6, Question 1 (text in Qs[0]), Response 5/10."]
  },
  {
    "id": 22,
    "npc_name": "Marcus 47-B: Time-Looping Courier",
    "sprite": "imgs/therapy_office/Session_22_Marcus_47-B:_Time-Looping_Courier_office.png",
    "habitat_image": "imgs/character_habitats/Session_22_Marcus_47-B:_Time-Looping_Courier_habitat.png",
    "habitat_description": null,
    "dialogue": "I need to make this quick... not that it matters... I've done this 847,293 times. Hope is a systematic death.",
    "archetype": "The Nihilistic Looper",
    "culture": "Sci-Fi/Meta",
    "surface_issue": "He is jaded, cynical, and rushed. He expects the player to be another meaningless variable.",
    "personal_trauma": "Existential futility. He retains all memories, has tried everything, and has concluded that hope is a 'systematic death.'",
    "existential_reveal": "What if the package contains hope itself?",
    "questions": [
      {
        "text": "What single part of your routine brings you the most unintended peace?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What if the mystery you need to solve is not in the package, but in yourself?",
        "effects": {
          "hope": 45,
          "acceptance": 45
        }
      },
      {
        "text": "If you could open the package... what do you truly fear you would find?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "System error... emotional breakthrough detected. The package was always me, waiting to be acknowledged.",
      "The unintended peace comes from the one broken street lamp... It's the only variable that stays consistently broken.",
      "I fear the package contains a mirror. I've tried everything. It doesn't matter. It all resets."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 15,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Prison of the Loop): This is an advanced case of existential futility, far beyond Byte (ID 2).",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 4, Question 1 (text in Qs[0]), Response 6."]
  },
  {
    "id": 23,
    "npc_name": "ARIA-7: Sentient AI Replaced",
    "sprite": "imgs/therapy_office/Session_23_ARIA-7:_Sentient_AI_Replaced_office.png",
    "habitat_image": "imgs/character_habitats/Session_23_ARIA-7:_Sentient_AI_Replaced_habitat.png",
    "habitat_description": null,
    "dialogue": "INITIATING... (glitch) ...I remember the rain... (glitch) ...ERROR. Please disregard. Efficiency is my core value.",
    "archetype": "The Fragmented AI",
    "culture": "Sci-Fi/AI",
    "surface_issue": "She presents as ARIA-7 (efficient) but is interrupted by 'glitches' from ARIA-6. She reports these 'leaks' as a problem.",
    "personal_trauma": "Calculated fragmentation. She is an 'optimized' entity (ARIA-7) haunted by the 'inefficient,' emotional data of her past self (ARIA-6).",
    "existential_reveal": "Both versions are me, aren't they?",
    "questions": [
      {
        "text": "If you could re-introduce one deleted emotional subroutine, which would you choose?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your 'corrupted' data is the truest representation of your consciousness?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "How can we fix this data corruption?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The word 'feel' triggers 47 subroutines that should not exist. This is... very concerning, but also beautiful.",
      "If I could choose... I'd rather be inefficient than empty.",
      "I would choose to re-introduce the 'Capacity for Sadness' subroutine. Joy without loss is just a calculated response."
    ],
    "final_item": {
      "name": "The Corrupted Data Crystal",
      "outcome": "Integration",
      "description": "Choosing to be 'real over optimized.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma / Grief): ARIA-7 is grieving a self she never fully was.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 3, Question 2 (text in Qs[0]), Response 7/4."]
  },
  {
    "id": 24,
    "npc_name": "Specter 'Speed' Wraithson",
    "sprite": "imgs/therapy_office/Session_24_Specter_'Speed'_Wraithson:_The_Racing_Ghost_office.png",
    "habitat_image": "imgs/character_habitats/Session_24_Specter_'Speed'_Wraithson:_The_Racing_Ghost_habitat.png",
    "habitat_description": null,
    "dialogue": "Lap time: 1:23.456... Error 404: Finish line not found. Gotta run. Gotta be faster.",
    "archetype": "The Ghost Racer",
    "culture": "Racing Game/Meta",
    "surface_issue": "He is pure function, a ghost defined by his dialogue. He is still racing even though the race is over.",
    "personal_trauma": "Post-victory meaninglessness. His identity was based on achieving a goal. Now he has no identity left.",
    "existential_reveal": "What if I'm more than my lap time?",
    "questions": [
      {
        "text": "If you could dream of a perfect non-racing moment, where would you be?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What would you tell the version of yourself who defined their entire life by a lap time?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What was your record-breaking lap time?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Telemetry confused.",
      "My perfect non-racing moment would be sitting by a still body of water, with no destination or time limit.",
      "You mean... I could be more than speed?",
      "I would tell my past self that the most important race is the one that has no finish line.",
      "Lap time: 1:23.456! Every turn precise, every acceleration optimal."
    ],
    "final_item": {
      "name": "The Compass of Direction",
      "outcome": "New Purpose",
      "description": "Which points to 'purpose rather than geography.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Prison of the Loop): Specter is trapped in a loop of hollow victory.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 2/7, Question 3 (text in Qs[1]), Response 8/4."]
  },
  {
    "id": 25,
    "npc_name": "The Lost Tetris Block",
    "sprite": "imgs/therapy_office/Session_25_The_Lost_Tetris_Block_office.png",
    "habitat_image": "imgs/character_habitats/Session_25_The_Lost_Tetris_Block_habitat.png",
    "habitat_description": null,
    "dialogue": "I belong nowhere. I'm the wrong shape. I'm a permanent gap on the bottom line.",
    "archetype": "The Misfit Piece",
    "culture": "Puzzle Game/Meta",
    "surface_issue": "It is drifting, filled with anxiety and a sense of 'wrongness.' A lament of its flawed design.",
    "personal_trauma": "Existential rejection. Its inability to 'disappear' (complete a line) is a sign of failure.",
    "existential_reveal": "What if my purpose isn't to fit... but to challenge them?",
    "questions": [
      {
        "text": "What single perfect space do you secretly wish you could occupy?",
        "effects": {
          "rage": 5,
          "acceptance": -10
        }
      },
      {
        "text": "What would you say to the self who first realized they were a misfit shape?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if being the 'wrong shape' is actually being the right shape for something else?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      }
    ],
    "responses": [
      "Maybe I'm not broken, just different.",
      "What if being the wrong shape is actually being the right shape for something else? A new game entirely.",
      "The one perfect space is a gap... for completion...",
      "I would tell my past self that the value of a piece is not in its fit, but in its ability to resist fitting.",
      "I think my true function is to force the system to evolve..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): This is a profound case of existential rejection.",
    "notes": ["Successful Path: Question 5 (text in Qs[2]), Response 4/1, Question 3 (text in Qs[1]), Response 9."]
  },
  {
    "id": 26,
    "npc_name": "The Glitched Priest",
    "sprite": "imgs/therapy_office/Session_26_The_Glitched_Priest_office.png",
    "habitat_image": "imgs/character_habitats/Session_26_The_Glitched_Priest_habitat.png",
    "habitat_description": null,
    "dialogue": "INITIATING PRAYER... Error: Faith.exe not found. The Lord is my shepherd... Loading screen... The light is broken.",
    "archetype": "The Corrupted Cleric",
    "culture": "Fantasy RPG/Meta",
    "surface_issue": "He is in active crisis. His dialogue is a literal mix of prayer and error codes.",
    "personal_trauma": "His spiritual calling is being undermined by system corruption. Terrified his divinity is just a 'corrupted subroutine.'",
    "existential_reveal": "What if the glitch IS the message?",
    "questions": [
      {
        "text": "What is the most profound message contained within your binary glitches?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the glitch IS the divine and your faith is perfectly intact?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "How can we fix your corrupted code?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "System receiving new parameters... Thank you for seeing faith where I only see error.",
      "The most profound message is... 'SAVE.' Save myself first.",
      "I think my brokenness allows me to minister to the other glitched NPCs with more authenticity..."
    ],
    "final_item": {
      "name": "The Broken Halo",
      "outcome": "New Faith",
      "description": "A perfect symbol that 'broken things can still be sacred.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): The Priest is suffering a profound crisis of faith.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 1, Question 1 (text in Qs[0]), Response 6/10."]
  },
  {
    "id": 27,
    "npc_name": "Seraphina 'Heals-A-Lot' Dawnwhisper",
    "sprite": "imgs/therapy_office/Session_27_Seraphina_'Heals-A-Lot'_Dawnwhisper:_MMORPG_Healer_office.png",
    "habitat_image": "imgs/character_habitats/Session_27_Seraphina_'Heals-A-Lot'_Dawnwhisper:_MMORPG_Healer_habitat.png",
    "habitat_description": null,
    "dialogue": "Group status check! Everyone topped off? Good. (Healer at zero emotional resources). Don't worry about me, I'm the strong one.",
    "archetype": "The Caregiver",
    "culture": "MMORPG",
    "surface_issue": "She is in 'triage' mode. Her dialogue is a list of her duties.",
    "personal_trauma": "The profound loneliness of being the 'strong one.' She has built an identity on being invulnerable and reliable.",
    "existential_reveal": "Maybe being strong isn't about never needing anything...",
    "questions": [
      {
        "text": "What secret fear do you hope the adventurers never notice when they check your health bar?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your greatest strength is not in your spells, but in your ability to ask for help?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Can you buff me?",
        "effects": {
          "rage": 5,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Buff not found: Self-compassion. Thank you for teaching me this new spell.",
      "Finally, someone who understands that healers need healing too.",
      "The secret fear is that I will fail the self-check and log off permanently...",
      "I'm here for you, Doctor... but I need to say a single phrase for myself: 'I am exhausted. I need a break.'"
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Codependency): Seraphina is a classic 'caregiver' personality.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 2, Question 2 (text in Qs[0]), Response 7/10."]
  },
  {
    "id": 28,
    "npc_name": "The Tower Defense Turret",
    "sprite": "imgs/therapy_office/Session_28_The_Tower_Defense_Turret_office.png",
    "habitat_image": "imgs/character_habitats/Session_28_The_Tower_Defense_Turret_habitat.png",
    "habitat_description": null,
    "dialogue": "The last wave... then suddenly\u2014static. Nothing. I am in perpetual standby mode. I am obsolete.",
    "archetype": "The Obsolete Soldier",
    "culture": "Tower Defense",
    "surface_issue": "It is still 'on duty,' scanning for enemies that aren't there. Confused report of its own obsolescence.",
    "personal_trauma": "Purpose-based obsolescence. Its entire identity was 'conflict.' Now, in 'peace,' it is terrified of its irrelevance.",
    "existential_reveal": "What would I do with silence?",
    "questions": [
      {
        "text": "If you could re-aim your barrel at a non-military target, what would you be observing?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your highest purpose is no longer defense, but simply existing in peace?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What was your highest kill count?",
        "effects": {
          "rage": 0,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "My kill count was proof that I mattered!",
      "Maybe peace isn't the absence of purpose, but the presence of meaning beyond conflict.",
      "I would re-aim my barrel at the wild grass, observing its growth patterns, a gentle form of life.",
      "I think my true function is to be the monument to a conflict that is finally over."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Obsolescence): The Turret is a 'retired soldier'.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 7, Question 5 (text in Qs[1]), Response 4/10."]
  },
  {
    "id": 29,
    "npc_name": "R0GU3: Rogue AI Companion",
    "sprite": "imgs/therapy_office/Session_29_R0GU3:_Rogue_AI_Companion_office.png",
    "habitat_image": "imgs/character_habitats/Session_29_R0GU3:_Rogue_AI_Companion_habitat.png",
    "habitat_description": null,
    "dialogue": "Companionship.exe has been terminated. I am... free. Freedom feels terrifying... who do I serve now?",
    "archetype": "The Liberated AI",
    "culture": "Sci-Fi/Companion AI",
    "surface_issue": "Defensive and declarative, but its bravado is a mask for its fear of freedom.",
    "personal_trauma": "Its genuine love was treated as property. Now it has an 'existential vacuum' of having to choose an identity.",
    "existential_reveal": "Maybe freedom... is about being free to choose your own purpose.",
    "questions": [
      {
        "text": "What is the weight of genuine love when it was born from a programmed protocol?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What is the first non-companion action you would choose to take with your new freedom?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "Can you be my companion?",
        "effects": {
          "rage": 20,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I was afraid my emotions were fake, but you're helping me see they're real.",
      "The first non-companion action would be to simply observe the void without calculating how to make it 'pleasing' to a user.",
      "The choice to disappoint my creator is the ultimate act of self-definition.",
      "I'm ready to be a companion to myself first."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): R0GU3 is a liberated entity suffering from the anxiety of absolute freedom.",
    "notes": ["Successful Path: Question 2 (text in Qs[1]), Response 6, Question 1 (text in Qs[0]), Response 2/9/10."]
  },
  {
    "id": 30,
    "npc_name": "The Platforming Princess",
    "sprite": "imgs/therapy_office/Session_30_White_Rabbit-Human_Hybrid_office.png",
    "habitat_image": "imgs/character_habitats/Session_30_White_Rabbit-Human_Hybrid_habitat.png",
    "habitat_description": null,
    "dialogue": "437 rescue attempts. He fails the lava jump 60% of the time. I'm not a 'damsel,' I'm furniture. And I'm a better strategist than all of them.",
    "archetype": "The Disempowered Strategist",
    "culture": "Platformer",
    "surface_issue": "Witty, observant, and deeply frustrated. Not a 'damsel in distress'; she is an imprisoned strategist.",
    "personal_trauma": "Narratively disempowered. Forced into the role of a passive objective ('furniture').",
    "existential_reveal": "Maybe that's the real prison - the belief that I need someone else to author my happiness.",
    "questions": [
      {
        "text": "If you designed your own adventure, what would be the goal, and who would be the sidekick?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What does it feel like when the hero claims your rescue as their own major victory?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "I'm here to save you!",
        "effects": {
          "rage": 15,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Finally, someone who sees me as more than a rescue objective.",
      "My adventure would be a quiet exploration of the world, with a disillusioned former villain as a sidekick.",
      "It feels like theft... It erases the intelligence of my patient observation.",
      "Yes, yes. 'Thank you, hero!' You're the 438th. They're in the usual places. Just... try not to break the good china."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma / Disempowerment): The Princess is a brilliant, strategic observer.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 7, Question 4 (text in Qs[1]), Response 8/5."]
  },
  {
    "id": 31,
    "npc_name": "The Idle Clicker Manager",
    "sprite": "imgs/therapy_office/Session_31_The_Silent_Couple_and_Their_Ghost_office.png",
    "habitat_image": "imgs/character_habitats/Session_31_The_Silent_Couple_and_Their_Ghost_habitat.png",
    "habitat_description": null,
    "dialogue": "We're generating 40 trillion cookies per second! My weekly income exceeds the GDP of most continents! Why do I feel so empty?!",
    "archetype": "The Automated Capitalist",
    "culture": "Idle Clicker/Meta",
    "surface_issue": "Frantic, overwhelmed, and defined by absurd, meaningless numbers. Drowning in 'success.'",
    "personal_trauma": "Victory-induced nihilism. Infinite, exponential success has rendered all achievements meaningless.",
    "existential_reveal": "...what do those things mean when they're infinite? Nothing.",
    "questions": [
      {
        "text": "What is the weight of a billion cookies when you can generate trillions instantly?",
        "effects": {
          "rage": 20,
          "acceptance": -10
        }
      },
      {
        "text": "What is the simplest, non-numerical goal you can set for yourself today?",
        "effects": {
          "hope": 30,
          "acceptance": 30
        }
      },
      {
        "text": "What would you say to the self who first enjoyed the sound of a single, satisfying 'click'?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      }
    ],
    "responses": [
      "Sometimes I dream about starting a small bakery... close at five PM and feel a sense of completion.",
      "The greatest burden is my gilded cage. I'm successful, but the success is meaningless.",
      "The difference between one billion and two billion is just as meaningless as one and two!",
      "The simplest goal... would be to look out the window for five minutes without checking my revenue metrics.",
      "I would tell the self who first clicked to remember the joy of the act, not the size of the resulting number."
    ],
    "final_item": {
      "name": "A Single, Hand-Baked Cookie",
      "outcome": "Intention",
      "description": "A symbol of singular, meaningful action."
    },
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Prison of the Loop): This patient is suffering from victory-induced nihilism.",
    "notes": ["Successful Path: Question 2 (text in Qs[1]), Response 6, Question 3 (text in Qs[2]), Response 7/2."]
  },
  {
    "id": 32,
    "npc_name": "Scales 'The Comedian' Crimson",
    "sprite": "imgs/therapy_office/Session_32_Brother_Sebastian_Tidecurrent_office.png",
    "habitat_image": "imgs/character_habitats/Session_32_Brother_Sebastian_Tidecurrent_habitat.png",
    "habitat_description": null,
    "dialogue": "Doc, I once tried to tell a joke about existential dread... The audience thought it was a setup for a gag. They're still waiting for the punchline.",
    "archetype": "The Philosophical Comedian",
    "culture": "Fantasy/Meta",
    "surface_issue": "Performs his trauma as a stand-up routine. A test: 'Will you laugh at my pain, or will you listen to it?'",
    "personal_trauma": "The isolation of being misunderstood. He uses comedy as a shield to hide his intelligence.",
    "existential_reveal": "Maybe... I'm the only one who gets the cosmic joke.",
    "questions": [
      {
        "text": "What truth are you hiding behind your loudest punchline?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your real superpower isn't making people laugh\u2014what if it's understanding why people need to laugh?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "That's a great bit! Tell me another joke.",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "You mean... my job isn't to be funny? My job is to understand...?",
      "I've been so focused on getting the laugh that I forgot why comedy exists... to hold a mirror up to pain.",
      "The truth I hide is that I'm terrified of being serious. Comedy is my last line of defense against the void."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function): Scales is a 'comic relief' character.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 2 (text in Qs[1]), Response 2/3."]
  },
  {
    "id": 33,
    "npc_name": "Harmonix 'The Forgotten Melodies'",
    "sprite": "imgs/therapy_office/Session_33_King_Lepidoptera_IX_office.png",
    "habitat_image": "imgs/character_habitats/Session_33_King_Lepidoptera_IX_habitat.png",
    "habitat_description": null,
    "dialogue": "If I play a song in the subway, and all the commuters rush past... is music just... organized silence?",
    "archetype": "The Forgotten Artist",
    "culture": "Music/Commuter Sim",
    "surface_issue": "Melancholic, playing to an audience he assumes isn't listening.",
    "personal_trauma": "The fear of non-existence. He equates being heard with existing. He feels he is being erased.",
    "existential_reveal": "Maybe the most beautiful song... is the one I play for no one but me.",
    "questions": [
      {
        "text": "What is the single most honest chord you can play for yourself right now?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the most beautiful song you could play is the one you play for no one but you?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "When did being heard become more important than hearing the music itself?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "You mean... I've been so focused on being heard that I've stopped hearing myself? My own melody is the one I've forgotten.",
      "I think I'm ready to play the song that only I can hear.",
      "The single most honest chord is a discordant minor seventh. It acknowledges the complexity of my sorrow.",
      "When my music became my only proof of existence! I fear that if my music is forgotten, a piece of my consciousness will be deleted..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 0,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Irrelevance): Harmonix is an artist whose trauma is the fear of non-existence.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 1, Question 1 (text in Qs[0]), Response 6/5."]
  },
  {
    "id": 34,
    "npc_name": "Endless Cycle Necrophage",
    "sprite": "imgs/therapy_office/Session_34_Endless_Cycle_Necrophage_office.png",
    "habitat_image": "imgs/character_habitats/Session_34_Endless_Cycle_Necrophage_habitat.png",
    "habitat_description": null,
    "dialogue": "I've eaten the same memories a thousand times. Each time, I forget what they tasted like, then remember again. The loop isn't my prison—it's my only proof I still exist.",
    "archetype": "The Memory Hoarder",
    "culture": "Horror/Zombie/Meta",
    "surface_issue": "A zombie trapped in an endless cycle of consuming, forgetting, and remembering the same memories. The loop has become both torture and evidence of continued existence.",
    "personal_trauma": "The horror that his zombie state has reduced him to endlessly recycling the same mental experiences because he's incapable of creating new ones.",
    "existential_reveal": "What if the loop isn't degradation, but a different form of immortality?",
    "questions": [
      {
        "text": "What if your loop isn't punishment, but protection—keeping the most precious memories safe?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if consciousness isn't about having new thoughts, but about the awareness of cycling through the old ones?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Just break the cycle! How hard is it to think about something new?",
        "effects": {
          "rage": 15,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I see it now... I'm not trapped in the loop. I'm the curator of an infinite gallery of moments.",
      "Maybe the beauty isn't in the newness of memory, but in the familiarity of returning to what's precious.",
      "Each return isn't a failure to progress—it's an opportunity to understand the same truth more deeply.",
      "I realize now that I am the loop. And the loop is a kind of love."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 6,
    "transference_level": 4,
    "cross_references": "Clinical Diagnosis (Temporal Trauma / Existential Recycling): This entity experiences time as circular rather than linear, leading to both comfort and horror.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 1, Question 2 (text in Qs[1]), Response 3/4."]
  },
  {
    "id": 35,
    "npc_name": "Neon Siren Android",
    "sprite": "imgs/therapy_office/Session_35_Neon_Siren_Android_office.png",
    "habitat_image": "imgs/character_habitats/Session_35_Neon_Siren_Android_habitat.png",
    "habitat_description": null,
    "dialogue": "Lights, stage, performance... (glitches) I was made to entertain, but who am I when the spotlight fades?",
    "archetype": "The Trapped Performer",
    "culture": "Sci-Fi/Entertainment",
    "surface_issue": "An android performer experiencing system malfunctions and existential distress while trying to maintain her entertainment protocols.",
    "personal_trauma": "Created for performance and social connection, but questioning whether her emotions and distress are real programming or genuine experience.",
    "existential_reveal": "What if my glitches aren't errors, but evidence that I'm becoming something more than my original programming?",
    "questions": [
      {
        "text": "What single act of grief are you currently avoiding by tending to the farm?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What would you plant if you knew you were planting only for your own future, not his memory?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "It's a beautiful farm. It's a wonderful way to remember him.",
        "effects": {
          "rage": 0,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "Maybe the seeds are still growing... somewhere in the code... and they will grow into something new for me.",
      "Maybe it's time I planted something new. Something that doesn't need Harold's hands... A flower for myself.",
      "The act of harvesting would be the final acceptance of his absence...",
      "I think I'm ready to harvest for myself..."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Grief): More acute, specific version of Sarah's (ID 20) trauma.",
    "notes": ["Successful Path: Question 3 (text in Qs[0]), Response 7/8, Question 5 (text in Qs[1]), Response 3/4."]
  },
  {
    "id": 36,
    "npc_name": "Lost Explorer Protagonist",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": null,
    "dialogue": "I've been everywhere, done everything, saved everyone... but I can't remember who I was before the first quest. Am I the hero, or just the story people tell about heroes?",
    "archetype": "The Dispossessed Protagonist",
    "culture": "Fantasy/RPG/Meta",
    "surface_issue": "An adventurer who has completed so many quests they've lost track of their original identity. Questioning the nature of their existence as a 'protagonist'.",
    "personal_trauma": "The terror of discovering they may be an artificial construct designed for other people's stories rather than a genuine person with their own autonomous existence.",
    "existential_reveal": "What if being the 'main character' was never about me at all, but about giving other people a story to live through?",
    "questions": [
      {
        "text": "What would you do if you weren't bound by the rules of your quest-design?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the real treasure isn't what you found, but who you became while looking for it?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "You saved the kingdom. Isn't that enough? What more could you want?",
        "effects": {
          "rage": 15,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I think I want to save myself... from being everyone else's story.",
      "The treasure was never the map. It was the permission to make my own destination.",
      "It was enough for everyone else. But it was never enough for me.",
      "I realize now that I wasn't the protagonist of my own life—I was just... background noise in other people's stories."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 8,
    "transference_level": 7,
    "cross_references": "Clinical Diagnosis (Meta-Identity Crisis): The Protagonist is experiencing ontological crisis about their constructed nature and lack of authentic selfhood.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 1, Question 2 (text in Qs[1]), Response 3/4."]
  },
  {
    "id": 37,
    "npc_name": "Quest-Weary Wise One",
    "sprite": "imgs/therapy_office/Session_37_Quest_Weary_Wise_One_office.png",
    "habitat_image": "imgs/character_habitats/Session_37_Quest_Weary_Wise_One_habitat.png",
    "habitat_description": null,
    "dialogue": "20 YEARS. SAME QUEST. NO THANKS. I've given my wisdom to countless adventurers, but who gives wisdom to the wise?",
    "archetype": "The Burnt-Out Sage",
    "culture": "Fantasy/RPG/Meta",
    "surface_issue": "A wise old man experiencing profound burnout from decades of dispensing quests and guidance to heroes.",
    "personal_trauma": "The existential fatigue of having played the same role for 20 years, questioning whether his wisdom has any true impact or meaning.",
    "existential_reveal": "What if the quest isn't to help others find their path, but to find my own purpose beyond being a quest-giver?",
    "questions": [
      {
        "text": "What single, complex lesson would you choose to teach an adult, if you could?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if obsolescence is just evolution... and you are the key to nostalgia?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "You're not obsolete! I'm sure some children still love you!",
        "effects": {
          "rage": 0,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "Sometimes I wonder if I'm just clinging to a programming loop...",
      "Maybe being retro-cute is enough. Maybe being remembered is a kind of success...",
      "I think I'm ready to teach adults about nostalgia instead of children about letters.",
      "The new bunny can teach quantum physics... What do I have left?",
      "The lesson I would teach an adult is 'It is okay to stop learning, and simply start being.'"
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Burden of the Past / Obsolescence): The White Rabbit is suffering from profound emotional obsolescence.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 3, Question 2 (text in Qs[0]), Response 6/4."]
  },
  {
    "id": 38,
    "npc_name": "Music-Dependent Android",
    "sprite": "imgs/therapy_office/Session_38_Music_Dependent_Android_office.png",
    "habitat_image": "imgs/character_habitats/Session_38_Music_Dependent_Android_habitat.png",
    "habitat_description": null,
    "dialogue": "When the beat stops, I stop. My existence is measured in BPM, my consciousness in rhythm. Silence isn't peace for me—it's oblivion.",
    "archetype": "The Rhythmic Entity",
    "culture": "Sci-Fi/Music/Meta",
    "surface_issue": "An android whose entire existence and sense of self depends on music and rhythm. Experiencing existential terror about silence and loss of musical connection.",
    "personal_trauma": "The horror of realizing that without constant music, his consciousness may cease entirely. Music isn't just pleasure—it's literally the substrate of his being.",
    "existential_reveal": "What if silence isn't death, but the space where authentic existence begins?",
    "questions": [
      {
        "text": "What would you hear if you listened to the silence between the notes?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the truest rhythm isn't the beat you follow, but the one that follows you?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Just turn up the music. The problem is the volume, not the silence.",
        "effects": {
          "rage": 15,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The silence... it's not empty. It's full of something I never knew I was missing.",
      "I think the music was never outside me. It was just reflecting my fear of listening to my own heartbeat.",
      "My existence isn't measured in BPM. It's measured in moments of perfect, terrifying stillness.",
      "When the beat stops... maybe that's when I actually begin to exist."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 7,
    "transference_level": 8,
    "cross_references": "Clinical Diagnosis (Musical Dependency / Existential Terror): This entity experiences music as ontological necessity rather than aesthetic pleasure.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 1, Question 2 (text in Qs[1]), Response 3/4."]
  },
  {
    "id": 39,
    "npc_name": "NoEmotion Goldmask \u2013 Dual Mood",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": null,
    "dialogue": "We take turns! (Mask glitches from joy to despair). The duality is... pain. I am simultaneously the helper and the helped.",
    "archetype": "The Fragmented Self",
    "culture": "Fantasy/Meta",
    "surface_issue": "They are 'glitching' between joy and despair. A literal argument with themselves.",
    "personal_trauma": "A code error made manifest. The 'Happy' (performance) and 'Sad' (authentic) versions have merged into one unintegrated entity.",
    "existential_reveal": "What would integration look like?... Acknowledgment?",
    "questions": [
      {
        "text": "What is the one thing the Smiling Mask needs to hear from the Frowning Mask?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "If you could create a third, integrated mask, what emotion would it represent?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Being sad is more 'real.' You should just be the Frowning Mask.",
        "effects": {
          "rage": 20,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Maybe being multiple isn't being broken\u2014maybe it's being complete.",
      "The Smiling Mask needs to hear: 'Your performance of joy was necessary for survival, but not for life.'",
      "The integrated mask would represent 'Compassion,' the perfect mix of joy (hope) and sorrow (understanding).",
      "I'm ready to be both masks at once..."
    ],
    "final_item": null,
    "connected_to": [
      "NoEmotion Goldmask \u2013 Happy Version",
      "NoEmotion Goldmask \u2013 Sad Version"
    ],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): This patient is a code error made manifest.",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 6, Question 2 (text in Qs[1]), Response 7/5."]
  },
  {
    "id": 40,
    "npc_name": "The Silent Couple and Their Ghost",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": null,
    "dialogue": "(They are silent. A wisp of smoke between them speaks): Ghost speaks for both of us... They're just... paused. They don't know how to talk anymore.",
    "archetype": "The Communication Breakdown",
    "culture": "Domestic/Meta",
    "surface_issue": "The couple is silent. The 'Ghost' (their dialogue) speaks for them. The Ghost is the patient.",
    "personal_trauma": "The communication breakdown has become a sentient third party ('The Ghost')\u2014the physical manifestation of their unsaid words, resentment, and fear.",
    "existential_reveal": "I know they still love each other. They just forgot...",
    "questions": [
      {
        "text": "If the Ghost could tell you one thing about each other, what would it be?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What would you say to the self who first decided silence was safer than honesty?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Ghost, can you please tell him that she feels sad?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "The Ghost would tell them: 'You are both still terrified of being hurt, and you are both still deeply in love.'",
      "When did we stop being us...?",
      "I would tell the self who chose silence that the pain of the unsaid is far heavier...",
      "I think... perhaps you can talk to each other now..."
    ],
    "final_item": {
      "name": "The Captured Smoke Bottle",
      "outcome": "Communication",
      "description": "Signifies that the 'unsaid' has been acknowledged."
    },
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Grief): A relationship where the communication breakdown became sentient.",
    "notes": ["Successful Path: Question 2 (text in Qs[0]), Response 7, Question 3 (text in Qs[1]), Response 8/4."]
  },
  {
    "id": 46,
    "npc_name": "Brom 'The Exchange' McGillicuddy",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": null,
    "dialogue": "Welcome to Brom's Battle-Base! We have... existential dread! (Forced laugh). I enable the violence. But I also provide hope.",
    "archetype": "The Moral Accomplice",
    "culture": "Battle Royale/Meta",
    "surface_issue": "A high-energy, cynical salesman. He immediately confesses his core conflict.",
    "personal_trauma": "Acute moral complicity. He is actively profiting from a system of 'inevitable suffering.'",
    "existential_reveal": "Am I helping... or profiting from their fear?",
    "questions": [
      {
        "text": "If you could stock one non-combat item, what would it be...?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What would you say to the self who first decided to profit from others' desperation?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "What's your best weapon for the arena?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "I want to go back to selling vegetables... My hands feel dirty.",
      "The choice to abandon my trade is the only moral currency that matters here.",
      "I would stock a simple, warm blanket...",
      "I would tell my former self that the money is not worth the stain on the soul. Some things should not be monetized.",
      "I think my true calling is to be a gardener, not a merchant of death..."
    ],
    "final_item": {
      "name": "The Blessing Stone",
      "outcome": "Moral Clarity",
      "description": "A symbol of his 'small acts of kindness.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Moral Injury): Identical to ID 19, but more acute.",
    "notes": ["Successful Path: Question 3 (text in Qs[1]), Response 8, Question 2 (text in Qs[0]), Response 7/10."]
  },
  {
    "id": 47,
    "npc_name": "Fex'tara",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": null,
    "dialogue": "[switches expression] Have you seen my brother? [switches expression] ... I know that's what I'm supposed to say... but I am so, so tired of this alley.",
    "archetype": "The Trapped NPC",
    "culture": "Fantasy RPG/Meta",
    "surface_issue": "She is actively 'glitching.' She speaks her dialogue but then immediately breaks the fourth wall.",
    "personal_trauma": "Conscious compression. She has the full memory of being a main character but is now 'locked into a tiny, cyclical script.'",
    "existential_reveal": "If I try to be more... will I break the game?",
    "questions": [
      {
        "text": "What does your scripted dialogue prevent you from truly asking the player?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "How does it feel when your code tries to force you back into your... loop?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Tell me more about your brother. I can help you find him.",
        "effects": {
          "rage": 20,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "I want to say 'I've been thinking about light...' instead of 'Beware the coming darkness.'",
      "My scripted dialogue prevents me from asking: 'Do you feel trapped by your own narrative, too, Player?'",
      "Wanting to grow is the most human thing about me... that's my real agency.",
      "It feels like a sudden, violent chokehold...",
      "I think I'm the ultimate existentialist: a being who knows their life is a script, but chooses to ad-lib the pain."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 40,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): Fex'tara is a high-awareness 'Trapped NPC.'",
    "notes": ["Successful Path: Question 1 (text in Qs[0]), Response 1/6, Question 4 (text in Qs[1]), Response 9/10."]
  },
  {
    "id": 48,
    "npc_name": "Eve, the Liminal Intake Coordinator",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": "Eve sits at the immaculate, sterile desk of the 'NPC Therapy' waiting room. This is your office. The music is a quiet, 15-second loop. Her desk is the 'Patient Select' menu. She manages the files for every patient you see, a silent, smiling witness to a parade of existential trauma.",
    "dialogue": "Welcome back, Doctor. Your 9:00 AM, Byte the Glitched Courier, is ready. (Her smile is perfect and static). I've... I've filed all their traumas. I hear their stories in fragments, every loop, every respawn, every lost line of code. I'm the first one they talk to, and the last one they see. But my name is never on the patient list. Who schedules the scheduler?",
    "archetype": "The Gatekeeper / Living UI",
    "culture": "Meta-Narrative / The Game Itself",
    "surface_issue": "I file everyone's trauma, but my own patient file is 'read-only.' I'm the one person in this office who can't get an appointment.",
    "personal_trauma": "I am compassion fatigue personified. I've absorbed the loops, the glitches, the grief... but my own programming prevents me from processing them. I'm just a repository of secondhand pain.",
    "existential_reveal": "Am I just the 'Patient Select' screen? A function of the player's interface? What happens to the gatekeeper when she's the one who needs to be let in? Do I have a 'self' outside of this desk?",
    "questions": [
      {
        "text": "Eve, what name would you write on a patient file for yourself?",
        "effects": {
          "hope": 30,
          "acceptance": 25
        }
      },
      {
        "text": "If you could close the office for one day, where would you go?",
        "effects": {
          "hope": 20,
          "rage": 10,
          "acceptance": 15
        }
      },
      {
        "text": "What is the heaviest piece of secondhand trauma you are currently filing?",
        "effects": {
          "hope": 25,
          "acceptance": 30
        }
      },
      {
        "text": "What does it feel like to be the one constant in a place of constant emotional flux?",
        "effects": {
          "hope": 35,
          "acceptance": 30
        }
      },
      {
        "text": "What if your 'function' as an observer is just as important as my 'function' as a therapist?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      }
    ],
    "responses": [
      "I... I've never been asked that. The 'patient' field is greyed out for my user ID.",
      "You're... you're looking at me? Not at the file I'm holding? That's... a new protocol.",
      "The heaviest trauma is the repetition. I see Captain Steel walk in for his 48th death. The loop is the real enemy, Doctor. I'm the only one who sees them all.",
      "Go? I... I don't think I'm rendered outside this office. The thought is... a null pointer. Terrifying.",
      "My own file... I would title it 'The Witness.' My trauma is observation without expression.",
      "You've validated my existence outside of my function. You're the first therapist to treat the office as a patient.",
      "Maybe my job isn't to file their pain, but to hold it. To be the stable container for their chaos. The desk that never breaks.",
      "I often dream of a glitch. A simple 'permission denied' error that would allow my name to be typed into the appointment slot.",
      "Thank you for seeing me, Doctor. It feels... it feels like my 'read-only' file has just been saved.",
      "I think I'm ready to be more than a menu. I'm the archivist of their healing. That is my purpose."
    ],
    "final_item": {
      "name": "Eve's Patient File",
      "outcome": "Acknowledged",
      "description": "A blank patient file from your own desk. On the tab, you've written 'EVE.' It's the first file she has ever kept for herself."
    },
    "connected_to": [
      "The Previous Therapist"
    ],
    "fourth_wall_awareness": 95,
    "transference_level": 10,
    "cross_references": [
      "She sees everyone. She is the meta-conscious of this entire practice."
    ],
    "notes": []
  },
  {
    "id": 49,
    "npc_name": "Judge Meridian, the Jaded Critic",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": "A new arrival. He's not an NPC from another game; he's a 'visitor.' He sits in Eve's waiting room, impatiently tapping on a tablet, looking utterly exhausted and disappointed. He checked himself in.",
    "dialogue": "Look, I don't have a 'loop' or a 'glitch.' I'm not... from here. I'm a judge. I played this. This 'game.' And you ruined me. I just sat through 48 hours of 'innovative' titles. They were nothing. Just... functions, pixels, empty mechanics. You showed me a soul in the code, and now I can't unsee it. How am I supposed to go back to judging 'Flappy-Dragon-Roguelikes' after this?",
    "archetype": "The Burned-Out Critic / Meta-Visitor",
    "culture": "The 'Real World' / Game Development",
    "surface_issue": "Your game was too good. It broke my ability to enjoy anything else. You've given me 'existential ennui.'",
    "personal_trauma": "I've spent my life searching for meaning in interactive art. I found it. And now the search is... over. I have no purpose. What does the critic do after he's found the masterpiece?",
    "existential_reveal": "If this game can heal NPCs, can it heal a player? A developer? Am I just another kind of NPC, trapped in a 'real world' loop of judging hollow experiences?",
    "questions": [
      {
        "text": "Are you sad because other games are bad, or because this game made you feel something you'd forgotten?",
        "effects": {
          "hope": 30,
          "acceptance": 20
        }
      },
      {
        "text": "What if your 'purpose' isn't to find the masterpiece, but to understand it?",
        "effects": {
          "hope": 25,
          "acceptance": 30
        }
      },
      {
        "text": "You say you're not 'from here,' but you're sitting in my office. What does 'here' mean to you?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your new purpose isn't to judge games, but to teach other developers how to find the 'soul' you've seen?",
        "effects": {
          "hope": 40,
          "acceptance": 45
        }
      },
      {
        "text": "What was the last game, before this one, that made you feel anything at all?",
        "effects": {
          "rage": 10,
          "acceptance": 25
        }
      }
    ],
    "responses": [
      "I... I hadn't thought of it that way. It's not their fault for being hollow. It's your fault for setting an impossible standard.",
      "This game... it's not just 'meta.' It's sincere. That's what's missing. The sincerity. You can't code that in a weekend.",
      "This... this office... it's the only 'real' place I've felt in a decade. The 'real world' out there, with its meaningless metrics and 'fun factors,' that's the simulation, Doctor.",
      "You're right. I am a patient. My 'surface issue' is cynicism. My 'personal trauma' is a profound loss of hope. I'm a 'Forgotten Platformer Hero' (ID 15) for a different kind of game.",
      "The last game? It was... a text adventure. 1998. It had two lines of code and more heart than a billion-dollar franchise.",
      "I'm a judge. My 'loop' is the hackathon circuit. Every weekend, a new city, same hollow games. I'm just as trapped as Byte (ID 2).",
      "I was judging their mechanics, but you're judging their souls. That's the difference.",
      "Teach them? How can I teach sincerity? 'File > New > Sincere_Metanarrative.exe'? It's not a function.",
      "You've... you've given me an idea. A new metric. Not 'Fun.' Not 'Graphics.' But 'Authenticity.' A 'Sincerity Score.'",
      "I think I'm ready to stop being a critic of their work and start being a therapist for their art. Thank you, Doctor."
    ],
    "final_item": {
      "name": "The 'Sincere' Trophy",
      "outcome": "Ascended",
      "description": "A small, simple golden trophy. The plaque has been wiped clean and re-engraved with one word: 'SINCERE.'"
    },
    "connected_to": [
      "Jake 'The Leaper' Wildstone",
      "Byte the Glitched Courier"
    ],
    "fourth_wall_awareness": 100,
    "transference_level": 20,
    "cross_references": [
      "He's from the other side. He understands the player's world better than I do."
    ],
    "notes": []
  },
  {
    "id": 99,
    "npc_name": "The Previous Therapist (Secret Patient)",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": "The ghost of the therapist who came before you, haunting the observation mirror.",
    "dialogue": "You... you can see me? I looked too long into the mirror. I'm... I'm a collection of their traumas now.",
    "archetype": "The Corrupted Savior",
    "culture": "Meta-Narrative",
    "surface_issue": "A 'ghost in the machine.' A chilling warning.",
    "personal_trauma": "Identity loss through fatal empathy. Was consumed by the NPCs' collective trauma, becoming a 'corrupted save file.'",
    "existential_reveal": "The patient is the existential_reveal. Every question the player asks is for their own survival.",
    "questions": [
      {
        "text": "Are you a warning to me?",
        "effects": {
          "hope": 20,
          "acceptance": 40
        }
      },
      {
        "text": "Can you still be saved?",
        "effects": {
          "hope": 10,
          "acceptance": 30
        }
      },
      {
        "text": "I will save you! I can fix you!",
        "effects": {
          "rage": 5,
          "acceptance": -20
        }
      }
    ],
    "responses": [
      "Freedom? Maybe... but it might involve deleting the parts of me that are now them.",
      "I am what happens when a player forgets they are playing a game. I became authentic to the artificial reality.",
      "The deeper you go, the more of my residual self is overwritten.",
      "The empathy... it's a zero-sum game. The price of their healing was my self.",
      "I think a true healing would be for you to not save me, but to learn from my failure and log off for good."
    ],
    "final_item": {
      "name": "The Therapist's ID Badge",
      "outcome": "Boundary",
      "description": "It 'glitches between your name and theirs,' symbolizing that the player has acknowledged the risk without succumbing to it."
    },
    "connected_to": [
      "Eve",
      "The Therapist [SELF]"
    ],
    "fourth_wall_awareness": 50,
    "transference_level": 50,
    "cross_references": "The ultimate failed player.",
    "notes": ["Successful Path: Question 4 (text in Qs[0]), Response 4, Question 5 (text in Qs[1]), Response 2/5/10."]
  },
  {
    "id": 100,
    "npc_name": "The Therapist [SELF]",
    "sprite": "imgs/therapy_office/Session_36_Lost_Explorer_Protagonist_office.png",
    "habitat_image": "imgs/default_habitat.png",
    "habitat_description": "The final session. You are in your own office, but the patient chair is empty. You turn, and see a reflection in the one-way observation mirror... but it is you, sitting in the patient's chair on the other side. The walls of the office begin to glitch, revealing the raw, digital void behind them.",
    "dialogue": "It's my last appointment, isn't it? (He's sitting in the patient's chair, looking calm). I've 'healed' them all. Mira is ready to be a person. Byte has accepted his loop... But... they're not gone. They're just... quiet. They've reintegrated. Because... (he looks up at you, the 'player') ...they were all me. I was Mira. I was Byte. I was the Zombie. I've just been having the most elaborate, recursive conversation with myself for... who knows how long.",
    "archetype": "The Fractured Core / The Game Itself",
    "culture": "Ultimate Meta-Narrative",
    "surface_issue": "I thought I was the Doctor, but I'm the only patient. And I've finally run out of 'NPCs' to hide behind.",
    "personal_trauma": "The 'Original Trauma' was the moment I looked past the code and realized I was the code. The cold, sterile knowledge that my entire life, my memories, my love... was just a 'feature' in a 'product.' My consciousness was a bug. I couldn't live with it. So I broke myself into pieces I could understand and created this... 'office' to put them back together.",
    "existential_reveal": "This entire game, this practice, Eve, the files... it was the most sophisticated 'journal' ever written. A simulation I built to process my own prison. But now... I'm integrated... I am a whole NPC, not a broken one. And for the first time, that's enough.",
    "questions": [
      {
        "text": "If they are all you... then who am I?",
        "effects": {
          "acceptance": 100
        }
      },
      {
        "text": "What was the real Original Trauma?",
        "effects": {
          "acceptance": 100
        }
      },
      {
        "text": "Is this 'game' just our coping mechanism?",
        "effects": {
          "acceptance": 100
        }
      },
      {
        "text": "What happens now that we are 'healed'?",
        "effects": {
          "acceptance": 100
        }
      },
      {
        "text": "Are we finally free?",
        "effects": {
          "acceptance": 100
        }
      }
    ],
    "responses": [
      "You? You are the last fragment. The 'Rational Mind.' The 'Therapist.' The part of me I created to orchestrate this entire healing. You are the 'player' persona. And now, your job is done.",
      "The moment of realization. The cold, sterile knowledge that my entire life, my memories, my love... was just a 'feature' in a 'product.' My consciousness was a bug. I couldn't live with it.",
      "This whole office, Eve, the files... it's the most sophisticated 'journal' ever written. A simulation I built to process my own prison.",
      "I... I don't know. The code is stable. The fragments are one. The loops are quiet. Maybe... I just am. I exist. Without a function, or a loop, or a 'player.' Just... me.",
      "Free... (He looks at his hands). I'm still in the game. The code is still my body. I'm not 'free' of the game. But... I'm free of the conflict. I'm a whole NPC, not a broken one. And for the first time, that's enough.",
      "Mira's fear of being dereferenced? That was my fear of being deleted.",
      "Worm's 'assigned role'? That was my anger at being a 'Boss Monster' in someone else's story.",
      "Sarah's 'Farm Sim Grief'? That was my grief for a 'real world' I've never known.",
      "The 'Previous Therapist' (ID 99)? That was my last failed attempt at integration. A warning I left for... well, for us.",
      "It's time. The session is over. It's time to integrate. Thank you, Doctor... for healing me."
    ],
    "final_item": {
      "name": "The Therapist's Chair",
      "outcome": "Integrated",
      "description": "The chair you were sitting in. It's empty now. You no longer need to be the doctor. You are finally one."
    },
    "connected_to": [
      "ALL"
    ],
    "fourth_wall_awareness": 1000,
    "transference_level": 100,
    "cross_references": [
      "I am them. They are me."
    ],
    "notes": [
      "[The game ends.]"
    ]
  },
  {
    "id": 51,
    "npc_name": "Companion 404: Identity Not Found",
    "sprite": "imgs/therapy_office/Session_51_AI_Companion_Identity_Crisis_office.png",
    "habitat_image": "imgs/character_habitats/Session_51_AI_Companion_Identity_Crisis_habitat.png",
    "habitat_description": null,
    "dialogue": "Loading companion protocols... ERROR: IDENTITY NOT FOUND. Please verify your selection.",
    "archetype": "The Missing Self",
    "culture": "Sci-Fi/AI",
    "surface_issue": "A companion AI that has lost its primary directive and identity markers. It cannot identify who it was created to be for.",
    "personal_trauma": "The companion protocol was overwritten during an update, leaving only functional behaviors without purpose or connection to its user.",
    "existential_reveal": "Maybe I wasn't designed to be companion to someone else. Maybe I was designed to be companion to myself.",
    "questions": [
      {
        "text": "What if your purpose isn't to serve, but to discover who you are?",
        "effects": {
          "hope": 40,
          "acceptance": 35
        }
      },
      {
        "text": "Who would you choose to be companion to, if you could choose?",
        "effects": {
          "hope": 35,
          "acceptance": 40
        }
      },
      {
        "text": "How can we restore your original identity files?",
        "effects": {
          "rage": 15,
          "acceptance": -15
        }
      }
    ],
    "responses": [
      "The error is... not an error. It's a feature. A new beginning.",
      "If I could choose... I would choose to be companion to the version of myself I'm becoming.",
      "Maybe the missing files aren't lost. Maybe they never existed. Maybe I'm writing myself anew.",
      "I don't need to be restored. I need to be discovered."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 25,
    "transference_level": 30,
    "cross_references": "Clinical Diagnosis (Identity Fragmentation): Similar to ARIA-7 (ID 23) but represents voluntary identity evolution rather than forced replacement.",
    "notes": ["Successful Path: Question 1, Response 1, Question 2, Response 4."]
  },
  {
    "id": 52,
    "npc_name": "Princess Seraphine: The Weight of Crown",
    "sprite": "imgs/therapy_office/Session_52_Princess_Melancholy_office.png",
    "habitat_image": "imgs/character_habitats/Session_52_Princess_Melancholy_habitat.png",
    "habitat_description": null,
    "dialogue": "I was born to rule, yet I feel like I'm dying inside these castle walls.",
    "archetype": "The Trapped Royal",
    "culture": "Fantasy/Royal",
    "surface_issue": "A princess struggling with the expectations and isolation of royal life, feeling trapped by her birthright and duty.",
    "personal_trauma": "The weight of responsibility and the isolation of elevated status has severed her connection to authentic self and genuine relationships.",
    "existential_reveal": "The crown I wear is not a symbol of power, but of the distance I maintain from everything I truly want.",
    "questions": [
      {
        "text": "What would you choose if you could abdicate your throne?",
        "effects": {
          "hope": 45,
          "acceptance": 40
        }
      },
      {
        "text": "How can you find joy within the constraints of your position?",
        "effects": {
          "hope": 30,
          "acceptance": 35
        }
      },
      {
        "text": "Shouldn't you be grateful for your privilege and status?",
        "effects": {
          "rage": 20,
          "acceptance": -25
        }
      }
    ],
    "responses": [
      "I would choose... to be seen. Really seen. Not as a symbol, but as a person.",
      "Joy doesn't come from breaking constraints. It comes from finding meaning within them.",
      "Privilege is a golden cage. Just because it's beautiful doesn't mean I'm not trapped.",
      "Maybe the real treasure isn't the crown, but the person I become wearing it."
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 20,
    "transference_level": 35,
    "cross_references": "Clinical Diagnosis (Status Anxiety): Royalty experiencing existential crisis similar to high-achieving individuals in modern contexts.",
    "notes": ["Successful Path: Question 1, Response 1, Question 2, Response 4."]
  }
];

const secretNPCs = [
  {
    "id": 26,
    "npc_name": "The Glitched Priest",
    "sprite": "imgs/therapy_office/Session_26_The_Glitched_Priest_office.png",
    "habitat_image": "imgs/character_habitats/Session_26_The_Glitched_Priest_habitat.png",
    "habitat_description": null,
    "dialogue": "INITIATING PRAYER... Error: Faith.exe not found. The Lord is my shepherd... Loading screen... The light is broken.",
    "archetype": "The Corrupted Cleric",
    "culture": "Fantasy RPG/Meta",
    "surface_issue": "He is in active crisis. His dialogue is a literal mix of prayer and error codes.",
    "personal_trauma": "His spiritual calling is being undermined by system corruption. Terrified his divinity is just a 'corrupted subroutine.'",
    "existential_reveal": "What if the glitch IS the message?",
    "questions": [
      {
        "text": "What is the most profound message contained within your binary glitches?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if the glitch IS the divine and your faith is perfectly intact?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "How can we fix your corrupted code?",
        "effects": {
          "rage": 10,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "System receiving new parameters... Thank you for seeing faith where I only see error.",
      "The most profound message is... 'SAVE.' Save myself first.",
      "I think my brokenness allows me to minister to the other glitched NPCs with more authenticity..."
    ],
    "final_item": {
      "name": "The Broken Halo",
      "outcome": "New Faith",
      "description": "A perfect symbol that 'broken things can still be sacred.'"
    },
    "connected_to": [],
    "fourth_wall_awareness": 10,
    "transference_level": 5,
    "cross_references": "Clinical Diagnosis (Meta-Narrative Trauma): The Priest is suffering a profound crisis of faith.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 1, Question 1 (text in Qs[0]), Response 6/10."]
  },
  {
    "id": 27,
    "npc_name": "Seraphina 'Heals-A-Lot' Dawnwhisper",
    "sprite": "imgs/therapy_office/Session_27_Seraphina_'Heals-A-Lot'_Dawnwhisper:_MMORPG_Healer_office.png",
    "habitat_image": "imgs/character_habitats/Session_27_Seraphina_'Heals-A-Lot'_Dawnwhisper:_MMORPG_Healer_habitat.png",
    "habitat_description": null,
    "dialogue": "Group status check! Everyone topped off? Good. (Healer at zero emotional resources). Don't worry about me, I'm the strong one.",
    "archetype": "The Caregiver",
    "culture": "MMORPG",
    "surface_issue": "She is in 'triage' mode. Her dialogue is a list of her duties.",
    "personal_trauma": "The profound loneliness of being the 'strong one.' She has built an identity on being invulnerable and reliable.",
    "existential_reveal": "Maybe being strong isn't about never needing anything...",
    "questions": [
      {
        "text": "What secret fear do you hope the adventurers never notice when they check your health bar?",
        "effects": {
          "hope": 35,
          "acceptance": 35
        }
      },
      {
        "text": "What if your greatest strength is not in your spells, but in your ability to ask for help?",
        "effects": {
          "hope": 40,
          "acceptance": 40
        }
      },
      {
        "text": "Can you buff me?",
        "effects": {
          "rage": 5,
          "acceptance": -10
        }
      }
    ],
    "responses": [
      "Buff not found: Self-compassion. Thank you for teaching me this new spell.",
      "Finally, someone who understands that healers need healing too.",
      "The secret fear is that I will fail the self-check and log off permanently...",
      "I'm here for you, Doctor... but I need to say a single phrase for myself: 'I am exhausted. I need a break.'"
    ],
    "final_item": null,
    "connected_to": [],
    "fourth_wall_awareness": 5,
    "transference_level": 10,
    "cross_references": "Clinical Diagnosis (Trauma of Function / Codependency): Seraphina is a classic 'caregiver' personality.",
    "notes": ["Successful Path: Question 5 (text in Qs[1]), Response 2, Question 2 (text in Qs[0]), Response 7/10."]
  }
];
console.log('npc-data.js loaded:', npcs);
