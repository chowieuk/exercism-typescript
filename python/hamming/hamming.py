def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError ("Strands must be the same length")

    if strand_a == strand_b:
        return 0
    
    hamming_distance = 0
    i = 0 

    # using iteration with a for loop

    for i in range(0, len(strand_a)):
            if strand_a[i] != strand_b[i]:
                hamming_distance += 1
            i += 1
    
    # using iteration
    # while i < len(strand_a):
    #     if strand_a[i] != strand_b[i]:
    #         hamming_distance += 1
    #     i += 1
    
    # using zip
    # for x, y in zip(strand_a, strand_b):
    #     if x != y:
    #         hamming_distance += 1

    return hamming_distance