
var formatSequence = require('./lib/format-sequence')

var sequence = 'ATGGTACTAGATCAAACAAAAAAATTACTCATCGTCATCATCGGCGCTTTACTCAATGCTGCCGGGCTGAACTTATTTTTGATACCTGCAGATGTATATGCCAGCGGATTTACAGGTGTTGCCCAGCTTTTATCAAGCGTCGTTGATCAATATGCCCCCTTTTACATATCGACGGGAACGCTCTTGTTCCTCTTAAACATTCCGGTCGGTATTTTAGGATGGCTGAAGGTCGGCAAATCGTTTACAGTGTACAGCATTTTAAGTGTCGCACTCACTACTCTGTTTATGGGGATCCTGCCGGAAACAAGCCTGTCACATGACATTTTGCTGAACGCGGTGTTCGGCGGCGTCATTTCCGCAGTCGGTATCGGCTTAACATTAAAATACGGAGCTTCGACAGGCGGGCTTGATATCGTCGCCATGGTACTTGCAAAGTGGAAGGATAAACCCGTCGGCACGTATTTCTTCATTCTGAACGGGATTATCATCTTGACGGCAGGATTATTGCAAGGTTGGGAGAAAGCATTATATACCCTGGTTACACTATATGTGACAACGAGGGTGATCGACGCCATTCACACTCGCCACATGAAGCTTACGGCAATGATTGTGACGAAAAAAGCGGACGAAATCAAGGAAGCCATTTACGGAAAAATGGTGCGCGGCATCACAACTGTTCCGGCAAAAGGAGCATTTACGAACGAACAGAAAGAAATGATGATTATCGTCATCACGAGGTATGAACTGTACGATTTAGAAAAGATCGTCAAAGAAGTTGATCCAAAAGCATTTACGAACATCGTTCAAACGACAGGGATTTTTGGTTTCTTTAGAAAAGACTGA'

console.log(formatSequence(sequence))

