---
layout: default
title: Publications
permalink: /publications/
---




# Publications


{% assign types = site.data.publications | map: 'type' | uniq %}

{% for type in types %}
 **{{ type }}**  {% type %} 
  {% assign type_pubs = site.data.publications | where: 'type', type %}
  {% assign years = type_pubs | map: 'year' | uniq | sort | reverse %}
  {% for year in years %}
   **{{ year }}**
    {% assign year_pubs = type_pubs | where: 'year', year %}
    {% for pub in year_pubs %}
 {{ pub.authors | join: ', '}} ({{ pub.year }}). {{ pub.title }}, {{ pub.journal }}.
       {% if pub.link %}[[Link]]({{ pub.link }}){% endif %}
       {% if pub.pdf %} [[PDF]]({{ pub.pdf }}) {% endif %}
       {% if publ.code %}[[Rcode]]({{ pub.code }}){% endif %}
     {% endfor %}
  {% endfor %}
{% endfor %}


* [2005-09](#y2005)
* [2000-04](#y2000)
* [1995-99](#y1995)

* [Article](#Article)


### Journal articles {#journal}

- Alqifari, H.N., Coolen, F.P.A., 2019. Robustness of Nonparametric Predictive Inference for Future Order Statistics. Journal of Statistical Theory and Practice. 
[[PDF]](../pdfs/papers/Alqifari2019.pdf)
[[Link]](https://link.springer.com/content/pdf/10.1007%2Fs42519-018-0011-x.pdf)
    
- Coolen-Maturi, T., 2018. Three-group ROC predictive analysis for ordinal outcomes. Communications in Statistics – Theory and Methods, to appear. 46, 9476–9493. [[PDF]](../pdfs/papers/TCM2018.pdf) [[Link]](http://dx.doi.org/10.1080/03610926.2016.1212074)    
   
- Coolen, F.P.A., Coolen-Maturi, T., Alqifari, H.N., 2018. Nonparametric predictive inference for future order statistics. Communications in Statistics - Theory and Methods, 47, 2527–2548.
[[PDF]](../pdfs/papers/CoCA2018.pdf)
[[Link]](http://dx.doi.org/10.1080/03610926.2017.1342834)
        
- Bakera, R.M., Coolen-Maturi, T., Coolen, F.P.A., 2017. Nonparametric Predictive Inference for Stock Returns. Journal of Applied Statistics 44, 1333–1349.
[[PDF]](../pdfs/papers/BaCC2016.pdf)
[[Link]](http://dx.doi.org/10.1080/02664763.2016.1204429)
 
 
- Coolen-Maturi, T., 2017. Predictive inference for best linear combination of biomarkers subject to limits of detection. Statistics in Medicine 36, 2844–2874.
[[PDF]](../pdfs/papers/TCM2017.pdf)
[[Link]](http://dx.doi.org/10.1002/sim.7317)
   
    
- Yin, Y.-C., Coolen, F.P.A., Coolen-Maturi, T., 2017. An imprecise statistical method for accelerated life testing using the power-Weibull model. Reliability Engineering & System Safety 167, 158–167.
[[PDF]](../pdfs/papers/YiCC2017.pdf)
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832016307591)
    

- Coolen, F.P.A., Coolen-Maturi, T., 2016. The structure function for system reliability as predictive (imprecise) probability. Reliability Engineering & System Safety 154, 180–187. 
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832016301132)
    
    
- Coolen-Maturi, T., Coolen, F.P.A., Muhammad, N., 2016. Predictive inference for bivariate data: Combining nonparametric predictive inference for marginals with an estimated copula. Journal of Statistical Theory and Practice 10, 515–538.   
[[Link]](http://dx.doi.org/10.1080/15598608.2016.1184112)
    
    
    
- Tee, K.F., Khan, L.R., Coolen-Maturi, T., 2015. Application of receiver operating characteristic curve for pipeline reliability analysis. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 229, 181–192.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/229/3/181)
    
   
    
- Coolen, F.P.A., Coolen-Maturi, T., 2015. Predictive inference for system reliability after common-cause component failures . Reliability Engineering & System Safety 135, 27–33.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832014002774)
    
    
    
- Coolen-Maturi, T., Coolen, F.P.A., 2015. Nonparametric Predictive Inference With Combined Data Under Different Right-Censoring Schemes. Journal of Statistical Theory and Practice 9, 288–304.
[[Link]](http://dx.doi.org/10.1080/15598608.2014.886313)
        
    
- Coolen-Maturi, T., 2014. Nonparametric predictive pairwise comparison with competing risks . Reliability Engineering & System Safety 132, 146–153.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832014001690)
    
    
    
- Coolen-Maturi, T., Coolen, F.P.A., 2014. Nonparametric predictive inference for combined competing risks data . Reliability Engineering & System Safety 126, 87–97.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832014000088)
     
    
- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2014. Nonparametric predictive inference for reliability of a k-out-of-m:G system with multiple component types . Reliability Engineering & System Safety 131, 298–304.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832014000787)
    
    
    
- Coolen, F.P.A., Himd, S.B., 2014. Nonparametric Predictive Inference for Reproducibility of Basic Nonparametric Tests. Journal of Statistical Theory and Practice 8, 591–618.
[[Link]](http://dx.doi.org/10.1080/15598608.2013.819792)
    
   
    
- Coolen, F.P.A., Coolen-Maturi, T., Al-nefaiee, A.H., 2014. Nonparametric predictive inference for system reliability using the survival signature. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 228, 437–448.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/228/5/437)
    
    
- Al-nefaiee, A.H., Coolen, F.P.A., 2013. Nonparametric predictive inference for system failure time based on bounds for the signature. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 227, 513–522.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/227/5/513)
    
    
    
- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2013. Nonparametric predictive reliability of series of voting systems . European Journal of Operational Research 226, 77–84.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0377221712008156)
    

    
- Coolen, F.P.A., Coolen-Schrijner, P., Coolen-Maturi, T., Elkhafifi, F.F., 2013. Nonparametric predictive inference for ordinal data. Communications in Statistics - Theory and Methods 42, 3478–3496.
[[Link]](http://dx.doi.org/10.1080/03610926.2011.632104)
    
   
- Houlding, B., Coolen, F.P.A., 2012. Nonparametric predictive utility inference . European Journal of Operational Research 221, 222–230.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0377221712002330)
    
- Elkhafifi, F.F., Coolen, F.P.A., 2012. Nonparametric predictive inference for accuracy of ordinal diagnostic tests. Journal of Statistical Theory and Practice 6, 681–697.
[[Link]](http://dx.doi.org/10.1080/15598608.2012.719802)
    
    
- Coolen, F.P.A., Al-nefaiee, A.H., 2012. Nonparametric predictive inference for failure times of systems with exchangeable components. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 226, 262–273.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/226/3/262)
    
   
- Coolen-Maturi, T., Coolen-Schrijner, P., Coolen, F.P.A., 2012. Nonparametric Predictive Inference for Binary Diagnostic Tests. Journal of Statistical Theory and Practice 6, 665–680.
[[Link]](http://dx.doi.org/10.1080/15598608.2012.719800)
    
  
- Coolen-Maturi, T., Coolen-Schrijner, P., Coolen, F.P.A., 2012. Nonparametric predictive multiple comparisons of lifetime data. Communications in Statistics - Theory and Methods 41, 4164–4181.
[[Link]](http://dx.doi.org/10.1080/03610926.2011.569863)
    
    
    
- Elsaeiti, M.A., Coolen, F.P.A., 2012. A Nonparametric predictive approach to sequential acceptance problems. Journal of Statistical Theory and Practice 6, 383–401.
[[Link]](http://dx.doi.org/10.1080/15598608.2012.695930)
    
    
    
- Coolen-Maturi, T., Coolen, F.P.A., 2011. Unobserved, re-defined, unknown or removed failure modes in competing risks. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 225, 461–474.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/225/4/461)
    
   
    
- Abellán, J., Baker, R.M., Coolen, F.P.A., 2011. Maximising entropy on the nonparametric predictive inference model for multinomial data . European Journal of Operational Research 212, 112–122.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0377221711000488)
    
    
    
- Roelofs, V.J., Coolen, F.P.A., Hart, A.D.M., 2011. Nonparametric Predictive Inference for Exposure Assessment. Risk Analysis 31, 218–227.
[[Link]](http://dx.doi.org/10.1111/j.1539-6924.2010.01490.x)
    
    
    
- Baker, R.M., Coolen, F.P.A., 2010. Nonparametric predictive category selection for multinomial data. Journal of Statistical Theory and Practice 4, 509–526.
[[Link]](http://dx.doi.org/10.1080/15598608.2010.10412000)
    
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2010. Nonparametric predictive inference for competing risks. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 224, 11–26.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/224/1/11)
    
   
    
- Coolen, F.P.A., Augustin, T., 2009. A nonparametric predictive alternative to the Imprecise Dirichlet Model: The case of a known number of categories . International Journal of Approximate Reasoning 50, 217–230.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0888613X08000583)
    
    
    
- Coolen, F.P.A., Elsaeiti, M.A., 2009. Nonparametric Predictive Methods for Acceptance Sampling. Journal of Statistical Theory and Practice 3, 907–921.
[[Link]](http://dx.doi.org/10.1080/15598608.2009.10411969)
    
   
- Coolen-Schrijner, P., Maturi, T.A., Coolen, F.P.A., 2009. Nonparametric Predictive Precedence Testing for Two Groups. Journal of Statistical Theory and Practice 3, 273–287.
[[Link]](http://dx.doi.org/10.1080/15598608.2009.10411925)

    
- MacPhee, I.M., Coolen, F.P.A., Aboalkhair, A.M., 2009. Nonparametric predictive system reliability with redundancy allocation following component testing. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 223, 181–188.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/223/3/181)
    
    
    
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2009. Nonparametric predictive pairwise comparison for real-valued data with terminated tails . International Journal of Approximate Reasoning 51, 141–150.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0888613X0900142X)
    
    
- Coolen-Schrijner, P., Coolen, F.P.A., MacPhee, I.M., 2008. Nonparametric predictive inference for system reliability with redundancy allocation. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 222, 463–476.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/222/4/463)
    
    
- Arts, G.R.J., Coolen, F.P.A., 2008. Two Nonparametric Predictive Control Charts. Journal of Statistical Theory and Practice 2, 499–512.
[[Link]](http://dx.doi.org/10.1080/15598608.2008.10411890)
    
- Coolen, F.P.A., 2007. Non-parametric prediction of unobserved failure modes. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 221, 207–216.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/221/3/207)
    
    
- Coolen-Schrijner, P., Coolen, F.P.A., 2007. Nonparametric predictive comparison of success-failure data in reliability. Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability 221, 319–327.
[[Link]](http://pio.sagepub.com/cgi/content/abstract/221/4/319)
    
    


#### 2000-04 {#y2000}


    
- Coolen, F.P.A., 2004. On the Use of Imprecise Probabilities in Reliability. Quality and Reliability Engineering International 20, 193–202.
[[Link]](http://dx.doi.org/10.1002/qre.560)
    
    
- Coolen-Schrijner, P., Coolen, F.P.A., 2004. Non-parametric Predictive Inference for Age Replacement with a Renewal Argument. Quality and Reliability Engineering International 20, 203–215.
[[Link]](http://dx.doi.org/10.1002/qre.561)
    
   
    
- Arts, G.R.J., Coolen, F.P.A., van der Laan, P., 2004. Nonparametric Predictive Inference in Statistical Process Control. Quality Technology & Quantitative Management 1, 201–216.
[[Link]](http://dx.doi.org/10.1080/16843703.2004.11673073)
    
   
    
- Coolen, F.P.A., Coolen-Schrijner, P., 2003. A nonparametric predictive method for queues . European Journal of Operational Research 145, 425–442.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0377221702001790)
    
   
    
- Coolen, F.P.A., Yan, K.J., 2003. Nonparametric predictive inference for grouped lifetime data . Reliability Engineering & System Safety 80, 243–252.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0951832003000334)

- Coolen, F.P.A., Coolen-Schrijner, P., Yan, K.J., 2002. Nonparametric predictive inference in reliability . Reliability Engineering & System Safety 78, 185–193. 
[[Link]](http://www.sciencedirect.com/science/article/pii/S095183200200162X)
    
#### 1995-99 {#y1995}
    
- Coolen, F.P.A., 1998. Low structure imprecise predictive inference for Bayes’ problem . Statistics & Probability Letters 36, 349–357.
[[Link]](http://www.sciencedirect.com/science/article/pii/S0167715297000813)
    
        

### Proceedings papers {#confint}

- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2012. Nonparametric predictive inference for reliability of a series of subsystems with multiple component types, in: Reliability, Risk Management (Proceedings Esrel 2011 Risk Management (Proceedings Esrel 2011 Troyes). C. Bérenguer, A.G., Soares, C.G. (Eds.), Advances in Safety. Taylor & Francis Group, London, . (Abstract page 168 of Book of Abstracts, pp. 1069–1077.
    
- Coolen, F.P.A., 2011. Nonparametric predictive inference in reliability and risk: recent developments, in: Proceedings SSARSth Summer Safety & Reliability Seminars. Krzysztof Kolowrocki and Joanna Soszynska-Budny, Volume 1 (1/2), pp 39-50, Journal of Polish Safety and Reliability Association. Eds, pp. 2011–5.
    
- Coolen, F.P.A., 2011. Nonparametric predictive inference, in: Lovric, M. (Ed.), International Encyclopedia of Statistical Science. Springer, pp. 968–970.
[[PDF]](../pdfs/papers/Cool2011.pdf)
    
- Al-Nefaiee, A., Coolen, F.P.A., 2011. Nonparametric predictive inference for failure times of systems consisting of exchangeable components, in: Prescott, D., Remenyte-Prescott, R. (Eds.), Proceedings Advances in Risk and Reliability Technology Symposium 2011. pp. 226–236.
     
- Coolen-Maturi, T., Coolen, F.P.A., 2011. On unobserved failure modes in competing risks, in: Prescott, D., Remenyte-Prescott, R. (Eds.), Proceedings Advances in Risk and Reliability Technology Symposium 2011. pp. 340–352.
    
    
- Baker, R.M., Coolen-Schrijner, P., Coolen, F.P.A., Augustin, T., 2011. Nonparametric predictive inference with subcategory data, in: ISIPTA’11. pp. 41–50.
[[PDF]](../pdfs/papers/BCCA2011.pdf)
[[Link]](http://www.sipta.org/isipta11/proceedings/)
    
- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2011. Nonparametric predictive inference for system reliability with subsystems consisting of multiple component types, in: Prescott, D., Remenyte-Prescott, R. (Eds.), Proceedings Advances in Risk and Reliability Technology Symposium 2011. pp. 322–339.
      
- Crossman, R.J., Abellan, J., Augustin, T., Coolen, F.P.A., 2011. Building imprecise classification trees with entropy ranges, in: ISIPTA’11. pp. 129–138.
[[PDF]](../pdfs/papers/CAAC2011.pdf)
[[Link]](http://www.sipta.org/isipta11/proceedings/)
    
- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2010. Nonparametric predictive inference for reliability of voting systems with multiple component types, in: Chateauneuf, M.N., Guérin, F. (Eds.), A. May 2010, Clermont-Ferrand, France, Proceedings Third International Conference on Accelerated Life Testing, Reliability-based Analysis and Design, pp. 175–182.
     
- Coolen, F.P.A., Maturi, T.A., 2010. Nonparametric predictive inference for order statistics of future observations, in: Borgelt, C., Gonzalez-Rodriguez, G., Trutschnig, W., Lubiano, M.A., Gil, M.A., Grzegorzewski, P., Hryniewicz, O. (Eds.), Combining Soft Computing and Statistical Methods in Data Analysis. Springer, Berlin (Advances in Intelligent and Soft Computing 77), . (Proceedings of the 5th International Conference on Soft Methods in Probability and Statistics, Oviedo, Spain, 28 Sept - 1 Oct 2010, pp. 97–104.
    
    
- Coolen, F.P.A., Coolen-Schrijner, P., Maturi, T.A., 2010. On nonparametric predictive inference for ordinal data, in: Kruse, R., Hoffmann, F. (Eds.), Eyke Hüllermeier. Computational Intelligence for Knowledge-Based Systems Design, Proceedings of the 13th International Conference on Information Processing and Management of Uncertainty, IPMU 2010, Dortmund, Germany, June 28 - July 2, 2010. Springer, Berlin, pp. 188–197.
     
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2009. On nonparametric predictive inference for competing risks, in: Proceedings 18th ARTS. pp. 196–211.
     
- Baker, R.M., Coolen, F.P.A., 2009. Category selection for multinomial data, in: Proceedings ISIPTA’09. pp. 21–30.
[[PDF]](../pdfs/papers/BaCo2009.pdf)
[[Link]](http://www.sipta.org/isipta09/proceedings/)
    
- Coolen, F.P.A., Aboalkhair, A.M., MacPhee, I.M., 2009. Nonparametric predictive system reliability with all subsystems consisting of one type of component, in: Kallen, M.J., Kuniewski, S.P. (Eds.), Risk and Decision Analysis in Maintenance Optimization and Flood Management. IOS Press (Delft University Press), Amsterdam, pp. 85–98.
    
  
- Elsaeiti, M., Coolen, F.P.A., 2009. Nonparametric predictive inference for acceptance sampling with destructive tests, in: Proceedings 18th ARTS. pp. 212–220.
        
    
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2009. Nonparametric predictive multiple comparisons with censored data and competing risks, in: Proceedings ISIPTA’09. pp. 307–316.
[[PDF]](../pdfs/papers/MaCC2009a.pdf)
[[Link]](http://www.sipta.org/isipta09/proceedings/)
    
- Aboalkhair, A.M., Coolen, F.P.A., MacPhee, I.M., 2009. Nonparametric predictive system reliability with redundancy allocation following component testing, in: Proceedings 18th ARTS. pp. 396–407.
    
- Coolen, F.P.A., Coolen-Schrijner, P., 2008. Nonparametric predictive inference for k-out-of-m systems, in: Advances in Mathematical Modeling for Reliability. T. Bedford, J. Quigley, L. Walls, B. Alkali, A. Daneshkhah, G. Hardman. IOS Press, Amsterdam, pp. 185–192.      
    
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2008. Lifetime comparisons with early termination of experiments, in: Proceedings ISNI’08. pp. 127–130.
            
- Coolen, F.P.A., 2008. On nonparametric predictive inference for Bernoulli quantities with set-valued data, in: Soft Methods for Handling Variability and Imprecision. D. Dubois, M. Asuncion Lubiana, H. Prade, M. Angeles Gil, P. Grzegorzewski, O. Hryniewicz. Springer, pp. 85–91.
     
- Coolen, F.P.A., Maturi, T.A., 2008. On nonparametric predictive inference with incomplete data, in: Proceedings ISNI’08. pp. 80–84.
    
- Maturi, T.A., Coolen-Schrijner, P., Coolen, F.P.A., 2008. Early termination of experiments in nonparametric predictive comparisons, in: Proceedings IWAP’08.
[[PDF]](../pdfs/papers/MaCC2008.pdf)
    
- Coolen, F.P.A., Augustin, T., 2007. Multinomial nonparametric predictive inference with sub-categories, in: Proceedings ISIPTA’07. pp. 77–86.
[[PDF]](../pdfs/papers/CoAu2007.pdf)
[[Link]](http://www.sipta.org/isipta07/proceedings/)
    
- Coolen, F.P.A., Houlding, B., Parkinson, S.G., 2007. Jury size and composition - a predictive approach, in: Proceedings ISIPTA’07. pp. 87–96.
[[PDF]](../pdfs/papers/CoHP2007.pdf)
[[Link]](http://www.sipta.org/isipta07/proceedings/)
    
- Coolen-Schrijner, P., Maturi, T., Coolen, F.P.A., 2007. Nonparametric predictive precedence testing for two groups, in: Proceedings MMR’07 (CD-ROM).
[[PDF]](../pdfs/papers/CoMC2007.pdf)
    
- Coolen, F.P.A., Coolen-Schrijner, P., 2007. Nonparametric predictive inference for Bernoulli quantities: two examples, in: Proceedings 56th ISI Conference.
[[PDF]](../pdfs/papers/CoCo2007.pdf)
    
- Coolen, F.P.A., Coolen-Schrijner, P., 2007. Nonparametric predictive inference for voting systems, in: Proceedings MMR’07 (CD-ROM.
[[PDF]](../pdfs/papers/CoCo2007a.pdf)
    
- Coolen-Schrijner, P., Coolen, F.P.A., 2007. Nonparametric predictive comparison of success-failure data in reliability, in: Proceedings 17th ARTS. pp. 255–273.
   
- Coolen, F.P.A., 2006. Coolen-Schrijner, in: P. Springer, Comparing proportions data with few successes. In: Soft Methods for Integrated Uncertainty Modelling, eds: J. Lawry, E. Miranda, A. Bugarin, S. Li, M. Angeles Gil, P. Grzegorzewski, O. Hryniewicz, pp. 241–248.
       
- Coolen, F.P.A., 2006. The occurrence of not yet observed failure modes, in: Safety and Reliability for Managing Risk. C. Guedes Soares, E. Zio. Taylor & Francis, pp. 881–888.
            
- Coolen, F.P.A., Augustin, T., 2005. Learning from multinomial data: a nonparametric predictive alternative to the Imprecise Dirichlet Model, in: Proceedings ISIPTA’05. pp. 125–134.
[[PDF]](../pdfs/papers/CoAu2005.pdf)
    
- Coolen-Schrijner, P., Coolen, F.P.A., Shaw, S.C., 2004. Adaptive (opportunity-based) age replacement strategies, in: Proceedings 5th MIMAR. pp. 75–80.
              
- Coolen, F.P.A., Yan, K.J., 2003. Nonparametric predictive comparison of two groups of lifetime data, in: Proceedings ISIPTA’03. pp. 148–161.
    
- Coolen-Schrijner, P., Coolen, F.P.A., 2003. Nonparametric predictive inference for age replacement with a renewal argument, in: Proceedings 15th ARTS. pp. 39–54.
    
- Coolen, F.P.A., Yan, K.J., 2002. The use of right-censored data in nonparametric predictive inference, in: Proceedings MMR’02. pp. 155–158.
    
       
    

### Other {#other} [[top](#top)]

- Coolen-Maturi, T., Elkhafifi, F.F., Coolen, F.P.A., 2013. Nonparametric predictive inference for three-group ROC analysis.
 [[PDF]](../pdfs/papers/CoEC2013.pdf)
    
   
