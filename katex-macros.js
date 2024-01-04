const katexMacros = {
  mathNotation: {
    "\\R": "\\mathbb{R}",
    "\\C": "\\mathbb{C}",
    "\\N": "\\mathbb{N}",
    "\\W": "\\mathbb{W}",
    "\\Q": "\\mathbb{Q}",
    "\\Z": "\\mathbb{Z}",
    "\\U": "\\mathbb{U}",
    "\\F": "\\mathbb{F}",
    "\\pmi": "\\mathbb{PMI}",
    "\\wop": "\\mathbb{WOP}",
  },
  mathFunctions: {
    "\\len": "\\operatorname{len}{#1}",
    "\\dist": "\\operatorname{dist}{#1}",
    "\\im": "\\operatorname{Im}{#1}",
    "\\re": "\\operatorname{Re}{#1}",
    "\\rel": "\\operatorname{\\mathsf{R}}_{\\operatorname{\\mathsf{#1}}}",
    "\\Rel": "\\operatorname{\\mathsf{#1}}",
  },
}

let allMacros = {};
for (const macrosCategory in katexMacros) {
  Object.assign(allMacros, katexMacros[macrosCategory])
}

module.exports = allMacros;
