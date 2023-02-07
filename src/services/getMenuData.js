import Image01 from "../assets/images/img01.jpeg"
import Image02 from "../assets/images/img02.jpeg"
import Image03 from "../assets/images/img03.jpeg"
import Image04 from "../assets/images/img04.jpeg"
import Image05 from "../assets/images/img05.jpeg"
import Image06 from "../assets/images/img06.jpeg"
import Image07 from "../assets/images/img07.jpeg"
import Image08 from "../assets/images/img08.jpeg"
import Image09 from "../assets/images/img09.jpeg"
import Image10 from "../assets/images/img10.jpeg"
import Image11 from "../assets/images/img11.jpeg"
import Image12 from "../assets/images/img12.jpeg"
import Image13 from "../assets/images/img13.jpeg"
import Image14 from "../assets/images/img14.jpeg"
import Image15 from "../assets/images/img15.jpeg"
import Image16 from "../assets/images/img16.jpeg"

import Thumb01 from "../assets/images/thumb01.jpeg"
import Thumb02 from "../assets/images/thumb02.jpeg"
import Thumb03 from "../assets/images/thumb03.jpeg"
import Thumb04 from "../assets/images/thumb04.jpeg"
import Thumb05 from "../assets/images/thumb05.jpeg"
import Thumb06 from "../assets/images/thumb06.jpeg"
import Thumb07 from "../assets/images/thumb07.jpeg"
import Thumb08 from "../assets/images/thumb08.jpeg"
import Thumb09 from "../assets/images/thumb09.jpeg"
import Thumb10 from "../assets/images/thumb10.jpeg"
import Thumb11 from "../assets/images/thumb11.jpeg"
import Thumb12 from "../assets/images/thumb12.jpeg"
import Thumb13 from "../assets/images/thumb13.jpeg"
import Thumb14 from "../assets/images/thumb14.jpeg"
import Thumb15 from "../assets/images/thumb15.jpeg"
import Thumb16 from "../assets/images/thumb16.jpeg"

const MenuData = [
  {
    category: "Category01",
    items: [
      {
        id: 1,
        name: "Item01",
        description: "This is a description of Item01",
        image: Image01,
        thumb: Thumb01,
        price: 8.95,
        energy: 657,
        nutrition: ["caffine", "dairy", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 2,
        name: "Item02",
        description: "This is a description of Item02",
        image: Image02,
        thumb: Thumb02,
        price: 10.95,
        energy: 857,
        nutrition: ["caffine", "dairy", "lactose"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category02",
    items: [
      {
        id: 3,
        name: "Item03",
        description: "This is a description of Item03",
        image: Image03,
        thumb: Thumb03,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 4,
        name: "Item04",
        description: "This is a description of Item04",
        image: Image04,
        thumb: Thumb04,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category03",
    items: [
      {
        id: 5,
        name: "Item05",
        description: "This is a description of Item03",
        image: Image05,
        thumb: Thumb05,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 6,
        name: "Item06",
        description: "This is a description of Item04",
        image: Image06,
        thumb: Thumb06,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category04",
    items: [
      {
        id: 7,
        name: "Item07",
        description: "This is a description of Item03",
        image: Image07,
        thumb: Thumb07,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 8,
        name: "Item08",
        description: "This is a description of Item04",
        image: Image08,
        thumb: Thumb08,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category05",
    items: [
      {
        id: 9,
        name: "Item09",
        description: "This is a description of Item09",
        image: Image09,
        thumb: Thumb09,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 10,
        name: "Item10",
        description: "This is a description of Item10",
        image: Image10,
        thumb: Thumb10,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category06",
    items: [
      {
        id: 11,
        name: "Item11",
        description: "This is a description of Item11",
        image: Image11,
        thumb: Thumb11,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 12,
        name: "Item12",
        description: "This is a description of Item12",
        image: Image12,
        thumb: Thumb12,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category07",
    items: [
      {
        id: 13,
        name: "Item13",
        description: "This is a description of Item13",
        image: Image13,
        thumb: Thumb13,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 14,
        name: "Item14",
        description: "This is a description of Item14",
        image: Image14,
        thumb: Thumb14,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  },
  {
    category: "Category08",
    items: [
      {
        id: 15,
        name: "Item15",
        description: "This is a description of Item15",
        image: Image15,
        thumb: Thumb15,
        price: 6.95,
        energy: 557,
        nutrition: ["caffine", "dairy", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      },
      {
        id: 16,
        name: "Item16",
        description: "This is a description of Item16",
        image: Image16,
        thumb: Thumb16,
        price: 9.95,
        energy: 757,
        nutrition: ["caffine", "lactose", "vegan"],
        required: {
          name: "Size",
          items: [
            {
              name: "Normal"
            },
            {
              name: "Big",
              energy: 50,
              price: 3
            },
            {
              name: "Large",
              energy: 100,
              price: 5
            }
          ]
        },
        optional: {
          name: "Add ons",
          limit: 2,
          items: [
            {
              name: "Add on 1",
              energy: 40,
              price: 1
            },
            {
              name: "Add on 2",
              energy: 50,
              price: 2
            },
            {
              name: "Add on 3",
              energy: 60,
              price: 3
            }
          ]
        }
      }
    ]
  }
]

export default MenuData
