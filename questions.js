
window.BANK = {
  chapters: {
    "Physics": {
      "1st Paper": [
        "Physical World and Measurement",
        "Vector",
        "Dynamics",
        "Newtonian Mechanics",
        "Work, Energy and Power",
        "Gravitation and Gravity",
        "Structural Properties of Matter",
        "Periodic Motion",
        "Waves",
        "Ideal Gas and Kinetic Theory"
      ],
      "2nd Paper": [
        "Thermodynamics",
        "Static Electricity",
        "Current Electricity",
        "Magnetic Effects of Electric Current",
        "Electromagnetic Induction",
        "Alternating Current",
        "Geometrical Optics",
        "Physical Optics",
        "Modern Physics",
        "Nuclear Physics",
        "Semiconductor and Electronics"
      ]
    },
    "Chemistry": {
      "1st Paper": [
        "Safe Use of Laboratory",
        "Qualitative Chemistry",
        "Periodic Properties of Elements",
        "Chemical Bonding",
        "Chemical Changes",
        "Applied Chemistry"
      ],
      "2nd Paper": [
        "Environmental Chemistry",
        "Organic Chemistry",
        "Quantitative Chemistry",
        "Electrochemistry",
        "Economic Chemistry"
      ]
    },
    "Biology": {
      "1st Paper": [
        "Cell and Its Structure",
        "Cell Division",
        "Cell Chemistry",
        "Microorganisms",
        "Algae and Fungi",
        "Bryophyta and Pteridophyta",
        "Gymnosperms and Angiosperms",
        "Tissue and Tissue System",
        "Plant Physiology",
        "Plant Reproduction",
        "Biotechnology",
        "Environment and Conservation"
      ],
      "2nd Paper": [
        "Animal Diversity and Classification",
        "Introduction to Animal",
        "Digestion and Absorption",
        "Blood and Circulation",
        "Respiration and Breathing",
        "Waste and Excretion",
        "Movement and Locomotion",
        "Coordination and Control",
        "Human Reproduction",
        "Immunity",
        "Genetics and Evolution",
        "Animal Behaviour"
      ]
    },
    "Higher Math": {
      "1st Paper": [
        "Matrices and Determinants",
        "Vectors",
        "Straight Lines",
        "Circle",
        "Permutations and Combinations",
        "Trigonometric Ratios",
        "Associated Angles",
        "Functions and Graphs",
        "Differentiation",
        "Integration"
      ],
      "2nd Paper": [
        "Real Numbers and Inequalities",
        "Linear Programming",
        "Complex Numbers",
        "Polynomials",
        "Binomial Expansion",
        "Conics",
        "Inverse Trigonometric Functions",
        "Statics",
        "Motion of Particles",
        "Probability"
      ]
    },
    "ICT": {
      "Combined": [
        "Information and Communication Technology",
        "Communication Systems and Networking",
        "Number Systems and Digital Devices",
        "Web Design and HTML",
        "Programming Language",
        "Database Management System"
      ]
    }
  },

  questions: {
    "Physics": {
      "1st Paper": {
        "Vector": {
          mcq: [
            {
              question: "Two perpendicular vectors have magnitudes 3 and 4. What is their resultant magnitude?",
              options: ["1", "5", "7", "12"],
              answer: 1,
              explanation: "R = √(3² + 4²) = 5."
            },
            {
              question: "Which of these is a vector quantity?",
              options: ["Speed", "Mass", "Displacement", "Temperature"],
              answer: 2,
              explanation: "Displacement has both magnitude and direction."
            }
          ],
          cq: [
            "A person walks 3 km east and then 4 km north. Calculate the magnitude and direction of the resultant displacement."
          ]
        }
      }
    },
    "Chemistry": {
      "2nd Paper": {
        "Organic Chemistry": {
          mcq: [
            {
              question: "Which functional group is present in alcohols?",
              options: ["-COOH", "-CHO", "-OH", "-NH2"],
              answer: 2,
              explanation: "Alcohols contain the hydroxyl (-OH) group."
            }
          ],
          cq: [
            "Explain how functional groups are used to classify organic compounds. Give two examples."
          ]
        }
      }
    },
    "Biology": {
      "1st Paper": {
        "Cell and Its Structure": {
          mcq: [
            {
              question: "Which organelle is a major site of aerobic respiration?",
              options: ["Ribosome", "Mitochondrion", "Golgi body", "Lysosome"],
              answer: 1,
              explanation: "Mitochondria produce much of the ATP used by eukaryotic cells."
            }
          ],
          cq: [
            "Describe two structural features of mitochondria that help them perform their function."
          ]
        }
      }
    },
    "Higher Math": {
      "1st Paper": {
        "Matrices and Determinants": {
          mcq: [
            {
              question: "Find the determinant of [[2, 1], [3, 4]].",
              options: ["5", "8", "11", "14"],
              answer: 0,
              explanation: "The determinant is (2 × 4) - (1 × 3) = 5."
            }
          ],
          cq: [
            "Calculate the determinant of the matrix [[2, 1], [3, 4]]."
          ]
        }
      }
    },
    "ICT": {
      "Combined": {
        "Number Systems and Digital Devices": {
          mcq: [
            {
              question: "What is the decimal value of binary 1010?",
              options: ["8", "10", "12", "14"],
              answer: 1,
              explanation: "1010₂ = 8 + 2 = 10."
            }
          ],
          cq: [
            "Convert (1101)₂ to decimal and show your calculation."
          ]
        }
      }
    }
  }
};
