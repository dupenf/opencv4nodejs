webpackJsonp([0x5c768ce8fd0a],{588:function(e,a){e.exports={pathContext:{apiTree:[{cvModule:"core",classTrees:[{className:"Mat",fnNamesWithCategory:[{category:"default",fnNames:["addWeighted","at","atRaw","convertScaleAbs","convertTo","copy","copyTo","countNonZero","dct","dft","findNonZero","flip","getData","getDataAsArray","getRegion","idct","idft","minMaxLoc","mulSpectrums","norm","normalize","perspectiveTransform","popBack","pop_back","pushBack","push_back","rotate","set","split","splitChannels","sum","transform"]},{category:"operators",fnNames:["abs","absdiff","add","and","bitwiseAnd","bitwiseNot","bitwiseOr","bitwiseXor","determinant","div","dot","exp","hDiv","hMul","mean","mul","or","sqrt","sub","transpose"]},{category:"imgproc functions",fnNames:["adaptiveThreshold","bgrToGray","bilateralFilter","blur","boxFilter","buildPyramid","canny","compareHist","connectedComponents","connectedComponentsWithStats","cornerEigenValsAndVecs","cornerHarris","cornerMinEigenVal","cornerSubPix","cvtColor","dilate","distanceTransform","distanceTransformWithLabels","drawArrowedLine","drawCircle","drawContours","drawEllipse","drawFillConvexPoly","drawFillPoly","drawLine","drawPolylines","drawRectangle","equalizeHist","erode","filter2D","findContours","floodFill","gaussianBlur","grabCut","houghCircles","houghLines","houghLinesP","inRange","laplacian","matchTemplate","medianBlur","moments","morphologyEx","putText","pyrDown","pyrUp","rescale","resize","resizeToMax","scharr","sepFilter2D","sobel","sqrBoxFilter","threshold","warpAffine","warpPerspective","watershed"]},{category:"calib3d functions",fnNames:["calibrationMatrixValues","correctMatches","decomposeEssentialMat","decomposeHomographyMat","decomposeProjectionMatrix","drawChessboardCorners","filterSpeckles","find4QuadCornerSubpix","findChessboardCorners","findEssentialMat","getOptimalNewCameraMatrix","matMulDeriv","recoverPose","rectify3Collinear","reprojectImageTo3D","rodrigues","rqDecomp3x3","stereoRectify","triangulatePoints","validateDisparity"]}]},{className:"Point",fnNamesWithCategory:[{category:"default",fnNames:["at"]},{category:"operators",fnNames:["add","div","mul","norm","sub"]}]},{className:"Rect",fnNamesWithCategory:[{category:"default",fnNames:["pad","rescale","toSquare"]},{category:"operators",fnNames:["and","or"]}]},{className:"RotatedRect",fnNamesWithCategory:[{category:"default",fnNames:["boundingRect"]}]},{className:"Size",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"TermCriteria",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"Vec",fnNamesWithCategory:[{category:"default",fnNames:["at"]},{category:"operators",fnNames:["absdiff","add","cross","div","exp","hDiv","hMul","mean","mul","norm","sqrt","sub"]}]}],cvFnNames:["cartToPolar","kmeans","partition","polarToCart"]},{cvModule:"imgproc",classTrees:[{className:"Contour",fnNamesWithCategory:[{category:"default",fnNames:["approxPolyDP","arcLength","boundingRect","convexHull","convexHullIndices","convexityDefects","fitEllipse","getPoints","matchShapes","minAreaRect","minEnclosingCircle","minEnclosingTriangle","moments","pointPolygonTest"]}]},{className:"Moments",fnNamesWithCategory:[{category:"default",fnNames:["huMoments"]}]}],cvFnNames:["calcHist","canny","fitLine","getAffineTransform","getPerspectiveTransform","getRotationMatrix2D","getStructuringElement","plot1DHist"]},{cvModule:"calib3d",classTrees:[],cvFnNames:["calibrateCamera","calibrateCameraExtended","composeRT","computeCorrespondEpilines","estimateAffine2D","estimateAffine3D","estimateAffinePartial2D","findEssentialMat","findFundamentalMat","findHomography","getValidDisparityROI","initCameraMatrix2D","projectPoints","recoverPose","sampsonDistance","solveP3P","solvePnP","solvePnPRansac","stereoCalibrate","stereoRectifyUncalibrated"]},{cvModule:"face",classTrees:[{className:"EigenFaceRecognizer",fnNamesWithCategory:[{category:"default",fnNames:["load","predict","save","train"]}]},{className:"FisherFaceRecognizer",fnNamesWithCategory:[{category:"default",fnNames:["load","predict","save","train"]}]},{className:"LBPHFaceRecognizer",fnNamesWithCategory:[{category:"default",fnNames:["load","predict","save","train"]}]}],cvFnNames:[]},{cvModule:"dnn",classTrees:[{className:"Net",fnNamesWithCategory:[{category:"default",fnNames:["forward","setInput"]}]}],cvFnNames:["blobFromImage","blobFromImages","readNetFromCaffe","readNetFromTensorflow"]},{cvModule:"features2d",classTrees:[{className:"AGASTDetector",fnNamesWithCategory:[{category:"default",fnNames:["detect"]}]},{className:"AKAZEDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"BRISKDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"DescriptorMatch",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"FASTDetector",fnNamesWithCategory:[{category:"default",fnNames:["detect"]}]},{className:"GFTTDetector",fnNamesWithCategory:[{category:"default",fnNames:["detect"]}]},{className:"KAZEDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"KeyPoint",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"MSERDetector",fnNamesWithCategory:[{category:"default",fnNames:["detect"]}]},{className:"ORBDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"SimpleBlobDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"SimpleBlobDetectorParams",fnNamesWithCategory:[{category:"default",fnNames:[]}]}],cvFnNames:["drawKeyPoints","drawMatches","matchBruteForce","matchBruteForceHamming","matchBruteForceHammingLut","matchBruteForceL1","matchBruteForceSL2","matchFlannBased","matchKnnBruteForce","matchKnnBruteForceHamming","matchKnnBruteForceHammingLut","matchKnnBruteForceL1","matchKnnBruteForceSL2","matchKnnFlannBased","Methods"]},{cvModule:"io",classTrees:[{className:"VideoCapture",fnNamesWithCategory:[{category:"default",fnNames:["get","read","release","reset","set"]}]},{className:"VideoWriter",fnNamesWithCategory:[{category:"default",fnNames:["fourcc","get","release","set","write"]}]}],cvFnNames:["destroyAllWindows","destroyWindow","imdecode","imencode","imread","imshow","imshowWait","imwrite","waitKey"]},{cvModule:"machinelearning",classTrees:[{className:"ParamGrid",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"SVM",fnNamesWithCategory:[{category:"default",fnNames:["calcError","getSupportVectors","load","predict","save","setParams","train","trainAuto"]}]},{className:"TrainData",fnNamesWithCategory:[{category:"default",fnNames:[]}]}],cvFnNames:[]},{cvModule:"objdetect",classTrees:[{className:"CascadeClassifier",fnNamesWithCategory:[{category:"default",fnNames:["detectMultiScale","detectMultiScaleGpu","detectMultiScaleWithRejectLevels"]}]},{className:"DetectionROI",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"HOGDescriptor",fnNamesWithCategory:[{category:"default",fnNames:["checkDetectorSize","compute","computeGradient","detect","detectMultiScale","detectMultiScaleROI","detectROI","getDaimlerPeopleDetector","getDefaultPeopleDetector","groupRectangles","load","save","setSVMDetector"]}]}],cvFnNames:[]},{cvModule:"photo",classTrees:[],cvFnNames:["fastNlMeansDenoisingColored"]},{cvModule:"text",classTrees:[{className:"OCRHMMClassifier",fnNamesWithCategory:[{category:"default",fnNames:["eval"]}]},{className:"OCRHMMDecoder",fnNamesWithCategory:[{category:"default",fnNames:["run","runWithInfo"]}]}],cvFnNames:["createOCRHMMTransitionsTable","loadOCRHMMClassifierCNN","loadOCRHMMClassifierNM"]},{cvModule:"tracking",classTrees:[{className:"MultiTracker",fnNamesWithCategory:[{category:"default",fnNames:["addBOOSTING","addKCF","addMEDIANFLOW","addMil","addTLD","update"]}]},{className:"TrackerBoosting",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]},{className:"TrackerBoostingParams",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"TrackerGOTURN",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]},{className:"TrackerKCF",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]},{className:"TrackerKCFParams",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"TrackerMedianFlow",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]},{className:"TrackerMIL",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]},{className:"TrackerMILParams",fnNamesWithCategory:[{category:"default",fnNames:[]}]},{className:"TrackerTLD",fnNamesWithCategory:[{category:"default",fnNames:["clear","init","update"]}]}],cvFnNames:[]},{cvModule:"video",classTrees:[{className:"BackgroundSubtractorKNN",fnNamesWithCategory:[{category:"default",fnNames:["apply"]}]},{className:"BackgroundSubtractorMOG2",fnNamesWithCategory:[{category:"default",fnNames:["apply"]}]}],cvFnNames:[]},{cvModule:"ximgproc",classTrees:[{className:"SuperpixelLSC",fnNamesWithCategory:[{category:"default",fnNames:["iterate"]}]},{className:"SuperpixelSEEDS",fnNamesWithCategory:[{category:"default",fnNames:["iterate"]}]},{className:"SuperpixelSLIC",fnNamesWithCategory:[{category:"default",fnNames:["iterate"]}]}],cvFnNames:[]},{cvModule:"xfeatures2d",classTrees:[{className:"SIFTDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]},{className:"SURFDetector",fnNamesWithCategory:[{category:"default",fnNames:["compute","detect"]}]}],cvFnNames:[]}],clazz:{className:"RotatedRect",cvModule:"core",fields:[{type:"Point2",name:"center"},{type:"Size",name:"size"},{type:"number",name:"angle"}],constructors:[{requiredArgs:[],optionalArgs:[]},{requiredArgs:[{type:"Point2",name:"center"},{type:"Size",name:"size"},{type:"number",name:"angle"}],optionalArgs:[]}]},functions:[{cvModule:"core",owner:"RotatedRect",fnName:"boundingRect",hasAsync:!1,signatures:[{requiredArgs:[],optionalArgs:[],returnValues:[{type:"Rect",name:"returnValue"}]}]}]}}}});
//# sourceMappingURL=path---docs-rotated-rect-9911f9f9088b3b080060.js.map