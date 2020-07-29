const DATA = {

    HOMEPAGE: {
        INTRO: "Hi...!!! I'm",
        NAME: "Sandeep Kumar Auddy",
        ABOUT: [
            "I am a Full-Stack Web developer who loves to build dynamic websites preferably gamified. I love solving real life problems using programming.",
            "I am quite fond of listening to musics and love singing.",
            "Currently, I am persuing Bachelor of Technology in Mining Engineering from IIT(ISM) DHANBAD"
        ],
        SOCIAL_LINKS: [
            {
                NAME: "Facebook",
                LINK: "https://www.facebook.com/sandeep.auddy.16/",
                ICON: ["fab", "facebook"]
            },
            {
                NAME: "LinkedIn",
                LINK: "https://www.linkedin.com/in/sandeep-auddy-8482221a4/",
                ICON: ["fab", "linkedin"]
            },
            {
                NAME: "GitHub",
                LINK: "https://github.com/SandeepKumarAuddy",
                ICON: ["fab", "github"]
            },
            {
                NAME: "Email",
                LINK: "mailto:sandeepkrauddy755@gmail.com",
                ICON: ["fas", "envelope-square"]
            }
        ]
    },


    SKILLS: [
        {
            CATEGORY: "Programming Languages",
            LIST: [
                {
                    NAME: "Java",
                    IMG: "/images/java.png",
                },
                {
                    NAME: "C",
                    IMG: "/images/c.png",
                },
                {
                    NAME: "Javascript",
                    IMG: "/images/javascript.png",
                },
            ]
        },
        {
            CATEGORY: "Databases",
            LIST: [
                {
                    NAME: "MongoDB",
                    IMG: "/images/mongodb.png",
                }
            ]
        },
        {
            CATEGORY: "Web Development",
            LIST: [
                {
                    NAME: "HTML",
                    IMG: "https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png",
                },
                {
                    NAME: "CSS",
                    IMG: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
                },
                {
                    NAME: "Node JS",
                    IMG: "/images/nodejs.png",
                },
                {
                    NAME: "Bootstrap",
                    IMG: "/images/bootstrap.png",
                },
                {
                    NAME: "React JS",
                    IMG: "/images/react.png",
                }
            ]
        },
        {
            CATEGORY: "Other Software skills",
            LIST: [
                {
                    NAME: "Git",
                    IMG: "/images/git.png",
                },
                {
                    NAME: "Postman",
                    IMG: "/images/postman.png",
                },
            ]
        }
    ],


    EDUCATIONS: [
        {
            INSTITUTE_NAME: "Denobili School (CMRI) Dhanbad",
            LINK: "http://denobilicmri.in/",
            LOGO: "/images/dns_logo.png",
            ACHIEVEMENTS: "Secured 97.4 percent in ICSE (3rd rank in the District)\n and, 96.5% in ISC (3rd rank in the District)",
            SPECIALIZATION: "Studied PCM with Computer Science",
        },
        {
            INSTITUTE_NAME: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
            LINK: "https://www.iitism.ac.in/",
            LOGO: "/images/iitism_logo.png",
            ACHIEVEMENTS: "",
            SPECIALIZATION: "Currently persuing Bachelor of Technology in Mining Engineering",
        }
    ],

    PROJECTS: [
        {
            IMG: "/images/yelpCamp_proj.png",
            TITLE: "Yelp Camp",
            DESC: "A website to showcase various handpicked YelpCamps from all over the world. Here users can REGISTER and ADD, REMOVE, EDIT Campgrounds.",
            LINK: "https://shielded-mountain-34237.herokuapp.com/"
        },
        {
            IMG: "/images/pantomath_proj.png",
            TITLE: "PANTOMATH",
            DESC: "A gamified Quizing website where users can POST questions and compete with other to increase RATING",
            LINK: "https://fathomless-scrubland-31548.herokuapp.com/"
        }
    ],
    
    CONTACT: {
        NUM: "+91 8340393937",
        ICON: ["fas", "phone"]
    },

    EMAIL: {
        ID: "sandeepkrauddy755@gmail.com",
        ICON: ["fas", "envelope-square"]
    },

    RESUME_FILENAME: "resumeFile.pdf"
};

export default DATA;