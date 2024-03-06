import React, {useState} from 'react';
import Template from '../../../components/Template/Template';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {content} from './CourtInformation.content';
import {colors} from '../../../utils/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import InputTextField from '../../../components/InputTextField/InputTextField';

const CourtInformationScreen = () => {
  const [image, setImage] = useState<string | undefined>();
  const [placeName, setPlaceName] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const defaultImageUploader = require('../../../assets/img/default-image-rectangle-uploader.png');

  const pickImage = React.useCallback(async () => {
    const upload = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    });

    if (upload.didCancel) {
      console.log('User cancelled image picker');
    } else if (upload.errorCode) {
      console.log('Image picker error: ', upload.errorCode);
    } else {
      let imageUri = upload.assets?.[0]?.uri;
      setImage(imageUri);
    }
  }, []);

  return (
    <Template>
      <TopHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>{content.title}</Text>
          <TouchableOpacity onPress={pickImage}>
            {!image && (
              <Image style={styles.image} source={defaultImageUploader} />
            )}
            {image && <Image style={styles.image} source={{uri: image}} />}
          </TouchableOpacity>
          <View style={styles.fields}>
            <InputTextField
              text={placeName}
              onChangeText={setPlaceName}
              placeholder={content.fields.place}
            />
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
              }}>
              <InputTextField
                text={cep}
                onChangeText={setCep}
                placeholder={content.fields.cep}
                style={{flex: 1}}
              />
              <InputTextField
                text={state}
                onChangeText={setState}
                placeholder={content.fields.state}
                style={{flex: 1}}
              />
            </View>
            <InputTextField
              text={city}
              onChangeText={setCity}
              placeholder={content.fields.city}
            />
            <InputTextField
              text={address}
              onChangeText={setAddress}
              placeholder={content.fields.address}
            />
            <InputTextField
              text={district}
              onChangeText={setDistrict}
              placeholder={content.fields.district}
            />
          </View>
        </View>
        <PrimaryButton onPress={() => {}} title={content.buttonText} />
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 46,
    paddingRight: 46,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  formContainer: {
    marginTop: 55,
  },
  formTitle: {
    color: colors.dark.primary.default,
    textTransform: 'uppercase',
    fontFamily: 'MonumentExtended-Ultrabold',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 178,
    marginTop: 10,
    borderRadius: 16,
  },
  fields: {
    marginTop: 18,
    gap: 12,
  },
});
export default CourtInformationScreen;
