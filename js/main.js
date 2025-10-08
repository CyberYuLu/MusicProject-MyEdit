// 初始化粒子系统
let clusters;

window.onload = function () {
  clusters = new Clusters();
  clusters.initialize();

  // 启动音频分析（控制粒子）
  startAudioAnalysis();
};

function startAudioAnalysis() {
  // 请求麦克风权限并开始分析
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);

      const analyzer = Meyda.createMeydaAnalyzer({
        audioContext: audioContext,
        source: source,
        bufferSize: 512,
        featureExtractors: ['rms', 'spectralCentroid'],
        callback: features => {
          console.log("Meyda 音频特征:", features);
          // 保存音频特征
          window.currentVolume = features.rms;
          window.currentPitch = features.spectralCentroid;
        }
      });

      analyzer.start();
    })
    .catch(err => {
      console.error("无法访问麦克风:", err);
    });
}
