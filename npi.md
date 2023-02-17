---
layout: default
title: NPI
permalink: /npi/
---

### Nonparametric Predictive Inference (NPI)

A natural starting point for statistical inference is often the assumptions of exchangeability of random quantities. To put it simply for real-valued random quantities: if one has n exchangeable random quantities, they are all equally likely to be the smallest, second smallest, etc. So, for one such a random quantity, the probability of its rank among all these random quantities is uniformly distributed over the values 1 to $n$ (assuming no ties for simplicity). Bruce Hill (1968; JASA 63, 677-691) introduced an assumption, called $A_{(n)}$, where this exchangeability property is actually used directly for prediction of one (or more) future values, on the basis of n observations. He later discussed this in much more detail, and summarized his findings as: 
 
> Let me conclude by observing that $A_{(n)}$ is supported by all of the serious approaches to  statistical inference. It is Bayesian, fiducial, and even a confidence/tolerance procedure. It is simple, coherent, and plausible. It can even be argued, I believe, that $A_{(n)}$ constitutes the fundamental solution to the problem of induction.

Nevertheless, $A_{(n)}$ has not received much attention in the statistical literature. A logical reason is that it only assigns equal probabilities for the next observation to belong to each of the $n+1$ intervals created by the previous n observations, so very few inferences can be based on this without requiring additional assumptions!? Well, this is indeed so if one uses only precise probabilities, where every event $A$ of interest is assumed to occur with a single-valued probability $P(A)$. However, there is no need to quantify uncertainty via only a single number, and indeed there are many arguments to use an interval-valued probability instead, so $[L(A),U(A)]$, for which a variety of interpretations are available, all generalizing possible interpretations of $P(A)$. A convenient interpretation of these lower and upper probabilities, $L(A)$ and $U(A)$, is as the optimal bounds for $P(A)$  that can be deduced from the available information. Such interval-valued probabilities have been around since the middle of the 19th century, and have received increasing attention since the early 90s, under different names including *imprecise probability* (Walley) and *interval probability* (Weichselberger). Clearly, within such a concept of interval-valued probability, one can base statistical inference on Hill's  $A_{(n)}$ only, so without requiring further assumptions.

Inspired by the need to develop statistical methods that rely on few (modelling) assumptions, we have been developing $A_{(n)}$-based inferences, mostly using interval probability, since the mid 90s, in collaboration with a number of colleagues and students, both at Durham and further afield. We have worked on general statistical inferences, on problems in reliability, and on problems in operational research, the latter leading to OR policies which are explicitly adaptive to available data, so deleting the often made assumption of fully known probability distributions. As such inferential methods are both nonparametric and predictive, that is directly in terms of one or more future observables, we like to refer to this approach as *NONPARAMETRIC PREDICTIVE INFERENCE*.  One exciting aspect of this approach is that the amount of information available in the data is directly related to the differences between corresponding upper and lower probability, providing a whole new dimension to uncertainty quantification when compared to statistical methods which use only precise probabilities, such as standard Bayesian and frequentist methods including most commonly used nonparametric methods.

 
 
Recent contribution to International Encyclopedia of Statistical Sciences (Springer) about NPI is [here](/pdfs/papers/Cool2011.pdf).


